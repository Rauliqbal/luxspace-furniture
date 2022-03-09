const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                blue: {
                    200: "#BCE7F0",
                },

                pink: {
                    400: "#F9CADA",
                },
            },
            fontFamily: {
                opensans: ['"Open Sans"', "sans - serif"],
            },
        },
    },
    plugins: [],
};
