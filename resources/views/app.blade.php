<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'Waitlist') }}</title>
        
        <!-- Favicon -->
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=2">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png?v=2">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2">
        <link rel="shortcut icon" href="/fp-favicon.ico">
        <meta name="msapplication-TileColor" content="#1b3e71">
        <meta name="theme-color" content="#1b3e71">

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="antialiased">
        @inertia
    </body>
</html>
