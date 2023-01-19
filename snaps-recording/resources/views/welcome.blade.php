<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Welcome</title>

    
        <style>
            body {
                font-family: 'Nunito', sans-serif;
                margin:0px;
                padding:0px
            }
        </style>
    </head>
    <body class="antialiased">
       <div id="app"></div>
       @vite('resources/js/app.js')
    </body>
</html>
