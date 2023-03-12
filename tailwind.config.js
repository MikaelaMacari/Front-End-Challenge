/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            width: {
                'lg': '105rem',
            },
            height: {
                'md': '31rem',
            }
        },
    },
    plugins: [],
}
