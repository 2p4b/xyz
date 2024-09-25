/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.html", "./partials/**/*.html", "./layouts/**/*.html"],
    theme: {
        fontFamily: {
            'sans': ['"Nunito Sans"', 'sans-serif', 'Arial']
        },
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-20deg)' },
                    '50%': { transform: 'rotate(20deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1.5s ease-in-out infinite',
            }

        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
}

