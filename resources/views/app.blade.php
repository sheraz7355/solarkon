<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'SOLARKON') }}</title>

        <!-- --- SEO META TAGS --- -->
        <meta name="description" content="Solarkon Private Limited is a premier solar energy solutions provider in Pakistan, delivering high-performance systems for residential, commercial, and industrial needs.">
        <meta name="keywords" content="Solar Pakistan, Solarkon, Solar Panels Lahore, Renewable Energy, Solar Financing, Net Metering Pakistan, Industrial Solar">
        <meta name="author" content="Solarkon Private Limited">
        <meta name="robots" content="index, follow">

        <!-- --- OPEN GRAPH (Facebook / LinkedIn) --- -->
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Solarkon">
        <meta property="og:title" content="SOLARKON - Powering a Brighter, Greener Pakistan">
        <meta property="og:description" content="Premier solar energy solutions provider in Pakistan. Get high-performance systems with flexible financing options.">
        
        <!-- UPDATED: Using the high-res 512px icon from your public folder -->
        <meta property="og:image" content="{{ asset('android-chrome-512x512.png') }}">
        <meta property="og:url" content="{{ url()->current() }}">

        <!-- --- TWITTER CARD --- -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="SOLARKON - Powering a Brighter, Greener Pakistan">
        <meta name="twitter:description" content="Premier solar energy solutions provider in Pakistan.">
        
        <!-- UPDATED: Using the high-res 512px icon here too -->
        <meta name="twitter:image" content="{{ asset('android-chrome-512x512.png') }}">

        <!-- --- FAVICON SETUP --- -->
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="shortcut icon" href="/favicon.ico">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />

        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])        
        @inertiaHead
    </head>
    <body class="font-sans antialiased text-gray-900">
        @inertia
    </body>
</html>