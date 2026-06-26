<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\WaitlistController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/courses', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Courses',
        'description' => 'Course details are coming soon.',
    ]);
})->name('courses');

Route::get('/forex', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Forex Trading',
        'description' => 'Forex trading resources will be available soon.',
    ]);
})->name('forex');

Route::get('/synthetic', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Synthetic Indices',
        'description' => 'Synthetic indices content is on the way.',
    ]);
})->name('synthetic');

Route::get('/signals', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Trading Signals',
        'description' => 'Signal services are coming soon.',
    ]);
})->name('signals');

Route::get('/copytrading', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Copytrading',
        'description' => 'Copytrading tools are coming soon.',
    ]);
})->name('copytrading');

Route::get('/mamba75', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Mamba75 Robot',
        'description' => 'Automation tools are coming soon.',
    ]);
})->name('mamba75');

Route::get('/events', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Events',
        'description' => 'Event updates are coming soon.',
    ]);
})->name('events');

Route::get('/updates', function () {
    return Inertia::render('coming-soon', [
        'title' => 'Updates',
        'description' => 'Updates are coming soon.',
    ]);
})->name('updates');

Route::get('/privacy-policy', function () {
    return Inertia::render('privacy-policy');
})->name('privacy-policy');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('terms-and-conditions');
})->name('terms-and-conditions');

Route::get('/risk-disclaimer', function () {
    return Inertia::render('risk-disclaimer');
})->name('risk-disclaimer');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::post('/waitlist', [WaitlistController::class, 'store'])->name('waitlist.store');
