<?php

namespace App\Support;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class PublicConfig
{
    private const WHATSAPP_FALLBACK = 'https://chat.whatsapp.com/LG9vyjEb6mK1N2Px4vhcF3?mode=gi_t';
    private const WHATSAPP_URL_ENDPOINT = 'http://localhost:8000/public-config/whatsapp_url';

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

    private static function extractUrl(mixed $payload, string $rawBody): ?string
    {
        if (is_string($payload) && filter_var($payload, FILTER_VALIDATE_URL)) {
            return $payload;
        }

        if (is_array($payload)) {
            foreach (['url', 'whatsapp_url', 'value'] as $key) {
                if (!empty($payload[$key]) && filter_var($payload[$key], FILTER_VALIDATE_URL)) {
                    return $payload[$key];
                }
            }

            if (isset($payload['data']) && is_array($payload['data'])) {
                foreach (['url', 'whatsapp_url', 'value'] as $key) {
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
