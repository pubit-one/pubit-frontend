/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',

    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-poster': "url('../public/template-license-poster.svg')",
            },
        },
    },
    plugins: [],
}
