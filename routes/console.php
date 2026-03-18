<?php

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Run daily; system cron should call `php artisan schedule:run` every minute.
app(Schedule::class)->command('waitlist:send-reminders')->dailyAt('09:00');
