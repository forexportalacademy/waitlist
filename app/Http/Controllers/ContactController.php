<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email:rfc,dns', 'max:255'],
            'subject' => ['nullable', 'string', 'max:200'],
            'message' => ['required', 'string', 'max:5000'],
        ], [
            'name.required' => 'Please provide your name.',
            'email.required' => 'Please provide an email address.',
            'email.email' => 'Please provide a valid email address.',
            'message.required' => 'Please enter a message.',
        ]);

        $supportEmail = 'support@forexportalacademy.net';
        $subject = $payload['subject'] ?: 'New contact form submission';
        $body = sprintf(
            "New message from the Forex Portal Academy contact form.\n\nName: %s\nEmail: %s\nSubject: %s\n\nMessage:\n%s",
            $payload['name'],
            $payload['email'],
            $subject,
            $payload['message']
        );

        try {
            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'Authorization' => config('services.zeptomail.send_token'),
            ])->post('https://api.zeptomail.com/v1.1/email', [
                'from' => [
                    'address' => config('mail.from.address'),
                    'name' => config('mail.from.name'),
                ],
                'to' => [[
                    'email_address' => [
                        'address' => $supportEmail,
                        'name' => 'Forex Portal Academy Support',
                    ],
                ]],
                'reply_to' => [[
                    'address' => $payload['email'],
                    'name' => $payload['name'],
                ]],
                'subject' => $subject,
                'textbody' => $body,
            ]);

            if (! $response->successful()) {
                Log::error('Zepto Mail API error (contact form)', [
                    'email' => $payload['email'],
                    'status' => $response->status(),
                    'response' => $response->json(),
                ]);

                // Fallback to Laravel Mail.
                Mail::raw($body, function ($message) use ($supportEmail, $subject, $payload) {
                    $message->to($supportEmail)
                        ->subject($subject)
                        ->replyTo($payload['email'], $payload['name']);
                });
            }
        } catch (\Exception $e) {
            Log::error('Failed to send contact form email', [
                'email' => $payload['email'],
                'error' => $e->getMessage(),
            ]);

            return back()->withErrors([
                'message' => 'An error occurred while sending your message. Please try again or email us directly.',
            ])->withInput();
        }

        return back()->with('success', "✅ Thanks for reaching out!\nWe've received your message and our team will respond as soon as possible.");
    }
}
