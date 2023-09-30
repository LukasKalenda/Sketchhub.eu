module.exports = {
    content: ["./pages/**/*.{vue,js,ts,jsx,tsx}", "./components/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary_white: '#ffffff',
                primary_dark: '#172554',
                secondary: '#1f2937',
                c_gray: "#E7F2F8",
                accent: '#9C27B0',
                error: '#f44336',
                warning: '#ffeb3b',
                info: '#2196f3',
                success: '#4caf50',
                gray_text: "#4b5563"
            }
        }
    },
    variants: {},
    plugins: []
};