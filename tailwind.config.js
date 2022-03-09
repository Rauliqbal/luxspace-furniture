module.exports = {
    content: ["./src/**/*.{html,js}", "index.html", "404.html"],
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
