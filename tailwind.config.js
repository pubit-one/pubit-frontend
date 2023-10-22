/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',

    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-poster': "url('../public/template-license-poster.svg')",
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'pubit-ultralight': '#E6F6F4',
                'pubit-light': '#98DAD4',
                'pubit-normal': '#63C8BE',
                'pubit-heavy': '#00A594',
                'pubit-dark': '#00534A',
            },
        },
    },
    plugins: [],
}
