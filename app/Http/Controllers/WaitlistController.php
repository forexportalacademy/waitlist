<?php

namespace App\Http\Controllers;

use App\Models\Waitlist;
use App\Http\Requests\WaitlistRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

class WaitlistController extends Controller
{
    public function store(WaitlistRequest $request): RedirectResponse
    {
        $payload = $request->validated();
        
        try {
            // Store user information in database (set mail_sent_at to current time initially)
            $waitlistUser = Waitlist::create(array_merge($payload, ['mail_sent_at' => now()]));
        } catch (\Exception $e) {
            // Handle database constraint violations or other database errors
            if (str_contains($e->getMessage(), 'Duplicate entry') || str_contains($e->getMessage(), 'UNIQUE constraint')) {
                return back()->withErrors([
                    'email' => 'This email address is already registered for the waitlist.'
                ])->withInput();
            }
            
            Log::error('Failed to store waitlist user', [
                'email' => $payload['email'],
                'error' => $e->getMessage()
            ]);
            
            return back()->withErrors([
                'email' => 'An error occurred while processing your registration. Please try again.'
            ])->withInput();
        }
        
        // Send email using the specific template for free course
        $templateAlias = "start-free-course";
        $classLink = "https://t.me/m/dRRTIX5YNGVk";
        $telegramLink = "https://t.me/+Mv5nThwlwbJhOTg0";
        $whatsappLink = "https://chat.whatsapp.com/F3z82ROUoPa8S4GIvZf1HE?mode=gi_t";

        try {
            $mergeVariables = [
                'name' => trim($payload['first_name'].' '.$payload['last_name']),
                'first_name' => $payload['first_name'],
                'product_name' => config('app.name'),
                'class_link' => $classLink,
                'telegram_link' => $telegramLink,
                'whatsapp_link' => $whatsappLink,
            ];

            // Use Zepto Mail API directly
            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => config('services.zeptomail.send_token'),
            ])->post('https://api.zeptomail.com/v1.1/email/template', [
                'template_key' => $templateAlias,
                'to' => [[
                    'email_address' => [
                        'address' => $payload['email'],
                        'name' => trim($payload['first_name'].' '.$payload['last_name'])
                    ]
                ]],
                'from' => [
                    'address' => config('mail.from.address'),
                    'name' => config('mail.from.name')
                ],
                'merge_info' => $mergeVariables
            ]);
            
            if ($response->successful()) {
                Log::info('Free course email sent successfully', [
                    'email' => $payload['email'], 
                    'template' => $templateAlias,
                    'response' => $response->json()
                ]);
            } else {
                Log::error('Zepto Mail API error', [
                    'email' => $payload['email'],
                    'status' => $response->status(),
                    'response' => $response->json()
                ]);
                
                // Fallback to Laravel Mail with provider options
                Mail::raw('', function ($message) use ($payload, $templateAlias, $mergeVariables) {
                    $message->to($payload['email'], trim($payload['first_name'].' '.$payload['last_name']))
                        ->subject('Congratulations — Your reservation in the Forex Portal Free Class is confirmed ✅');

                    $headers = $message->getHeaders();
                    $headers->addTextHeader('template_key', $templateAlias);
                    $headers->addTextHeader('merge_info', json_encode($mergeVariables));
                });
                
                Log::info('Sent via Laravel Mail fallback', ['email' => $payload['email']]);
            }
            
        } catch (\Exception $e) {
            Log::error('Failed to send free course email', [
                'email' => $payload['email'],
                'error' => $e->getMessage()
            ]);
        }

        return back()->with('success', "✅ Your seat is confirmed\n📩 We've sent the class link to your email\n⚠️ Check Spam/Promotions if you don't see it");
    }
}
