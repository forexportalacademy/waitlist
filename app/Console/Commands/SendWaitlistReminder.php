<?php

namespace App\Console\Commands;

use App\Models\Waitlist;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Support\PublicConfig;

class SendWaitlistReminder extends Command
{
    protected $signature = 'waitlist:send-reminders';
    protected $description = 'Send one-time next-day reminder emails to waitlist users.';

    public function handle(): int
    {
        $yesterdayStart = now()->subDay()->startOfDay();
        $yesterdayEnd = now()->subDay()->endOfDay();

        $query = Waitlist::query()
            ->whereNotNull('mail_sent_at')
            ->whereNull('reminder_sent_at')
            ->whereBetween('mail_sent_at', [$yesterdayStart, $yesterdayEnd]);

        $total = (clone $query)->count();
        $this->info("Found {$total} waitlist users to remind.");

        $templateAlias = 'waitlist-reminder';
        $classLink = PublicConfig::whatsappUrl();
        $telegramLink = 'https://t.me/+Mv5nThwlwbJhOTg0';
        $whatsappLink = $classLink;

        $query->orderBy('id')->chunkById(100, function ($waitlists) use ($templateAlias, $classLink, $telegramLink, $whatsappLink) {
            foreach ($waitlists as $waitlist) {
                $mergeVariables = [
                    'name' => trim($waitlist->first_name.' '.$waitlist->last_name),
                    'first_name' => $waitlist->first_name,
                    'product_name' => config('app.name'),
                    'class_link' => $classLink,
                    'telegram_link' => $telegramLink,
                    'whatsapp_link' => $whatsappLink,
                ];

                try {
                    $response = Http::withHeaders([
                        'Accept' => 'application/json',
                        'Content-Type' => 'application/json',
                        'Authorization' => config('services.zeptomail.send_token'),
                    ])->post('https://api.zeptomail.com/v1.1/email/template', [
                        'template_key' => $templateAlias,
                        'to' => [[
                            'email_address' => [
                                'address' => $waitlist->email,
                                'name' => trim($waitlist->first_name.' '.$waitlist->last_name),
                            ],
                        ]],
                        'from' => [
                            'address' => config('mail.from.address'),
                            'name' => config('mail.from.name'),
                        ],
                        'merge_info' => $mergeVariables,
                    ]);

                    if ($response->successful()) {
                        Log::info('Waitlist reminder sent successfully', [
                            'email' => $waitlist->email,
                            'template' => $templateAlias,
                            'response' => $response->json(),
                        ]);
                    } else {
                        Log::error('Zepto Mail API error (reminder)', [
                            'email' => $waitlist->email,
                            'status' => $response->status(),
                            'response' => $response->json(),
                        ]);

                        Mail::raw('', function ($message) use ($waitlist, $templateAlias, $mergeVariables) {
                            $message->to($waitlist->email, trim($waitlist->first_name.' '.$waitlist->last_name))
                                ->subject('Reminder — Your Forex Portal Free Class starts soon');

                            $headers = $message->getHeaders();
                            $headers->addTextHeader('template_key', $templateAlias);
                            $headers->addTextHeader('merge_info', json_encode($mergeVariables));
                        });

                        Log::info('Reminder sent via Laravel Mail fallback', ['email' => $waitlist->email]);
                    }
                } catch (\Exception $e) {
                    Log::error('Failed to send waitlist reminder', [
                        'email' => $waitlist->email,
                        'error' => $e->getMessage(),
                    ]);
                }

                // Mark as attempted to ensure reminder is sent only once.
                $waitlist->forceFill(['reminder_sent_at' => now()])->save();
            }
        });

        return self::SUCCESS;
    }
}
