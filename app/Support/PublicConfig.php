<?php

namespace App\Support;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PublicConfig
{
    private const WHATSAPP_FALLBACK = 'https://chat.whatsapp.com/C3zAkEbvyV7EHFkflobSlh?mode=gi_t';
    private const WHATSAPP_URL_ENDPOINT = 'https://testing.forexportalacademy.net/public-config/whatsapp_url';
    private const TELEGRAM_FALLBACK = 'https://t.me/+Mv5nThwlwbJhOTg0';
    private const TELEGRAM_URL_ENDPOINT = 'https://testing.forexportalacademy.net/public-config/telegram_url';

    public static function whatsappUrl(): string
    {
        try {
            $response = Http::timeout(5)->acceptJson()->get(self::WHATSAPP_URL_ENDPOINT);
            if ($response->successful()) {
                $value = self::extractUrl($response->json(), $response->body());
                if ($value) {
                    return $value;
                }
            }
        } catch (\Throwable $e) {
            Log::warning('Failed to fetch public WhatsApp URL', [
                'error' => $e->getMessage(),
            ]);
        }

        return self::WHATSAPP_FALLBACK;
    }

    public static function telegramUrl(): string
    {
        try {
            $response = Http::timeout(5)->acceptJson()->get(self::TELEGRAM_URL_ENDPOINT);
            if ($response->successful()) {
                $value = self::extractUrl($response->json(), $response->body());
                if ($value) {
                    return $value;
                }
            }
        } catch (\Throwable $e) {
            Log::warning('Failed to fetch public Telegram URL', [
                'error' => $e->getMessage(),
            ]);
        }

        return self::TELEGRAM_FALLBACK;
    }

    private static function extractUrl(mixed $payload, string $rawBody): ?string
    {
        if (is_string($payload) && filter_var($payload, FILTER_VALIDATE_URL)) {
            return $payload;
        }

        if (is_array($payload)) {
            foreach (['url', 'whatsapp_url', 'telegram_url', 'value'] as $key) {
                if (!empty($payload[$key]) && filter_var($payload[$key], FILTER_VALIDATE_URL)) {
                    return $payload[$key];
                }
            }

            if (isset($payload['data']) && is_array($payload['data'])) {
                foreach (['url', 'whatsapp_url', 'telegram_url', 'value'] as $key) {
                    if (!empty($payload['data'][$key]) && filter_var($payload['data'][$key], FILTER_VALIDATE_URL)) {
                        return $payload['data'][$key];
                    }
                }
            }
        }

        if ($rawBody && filter_var($rawBody, FILTER_VALIDATE_URL)) {
            return $rawBody;
        }

        return null;
    }
}
