module.exports = {
    // Rutas de contenido
    content: [
        "./pages/*.js",
        "./pages/**/*.js",
        "./components/*.js",
        "./components/**/*.js",
    ],
    // Configuración de DaisyUI Themes
    daisyui: {
        themes: [
            {
                mytheme: {
                    // Colores principales
                    "primary": "#0971b5",
                    "primary-content": "#010c14",

                    // Colores secundarios
                    "secondary": "#d9ebf8",
                    "secondary-content": "#010c14",

                    // Color de acento
                    "accent": "#37cdbe",
                    "accent-content": "#fff",

                    // Colores neutrales
                    "neutral": "#3d4451",
                    "neutral-content": "#fff",

                    // Escala de grises
                    "base-100": "#F8F8F8",
                    "base-200": "#b7dffc",
                    "base-300": "#88c2ec",
                    "base-content": "#65ade1",

                    // Colores informativos
                    "info": "#0971b5",
                    "info-content": "#fff",

                    // Colores de éxito
                    "success": "#37cdbe",
                    "success-content": "#fff",

                    // Colores de advertencia
                    "warning": "#fbbf24",
                    "warning-content": "#fff",

                    // Colores de error
                    "error": "#ef4444",
                    "error-content": "#fff",
                },
            },
        ],
    },
    // Configuración de tema Pathbooks
    theme: {

        boxShadow: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            "orange-md": "0px 20px 40px -15px rgba(4, 122, 190, 0.81) ",
            none: "none",
        },
        colors: {
            transparent: "transparent",
            azulpathbooks: "#046aac",
            black: {
                100: "#0B132A",
                500: "#000",
            },
            white: {
                100: "#F8F8F8",
                500: "#FFFFFF",
            },
            gray: {
                100: "#F8F9FA",
                200: "#EBEDF0",
                300: "#D1D4DC",
                400: "#AEB5C5",
                500: "#7C8896",
                600: "#4B5563",
            },
            orange: {
                100: "#FFEDD9",
                200: "#FFDBB2",
                300: "#FFC88B",
                400: "#FFB663",
                500: "#FFA33C",
                600: "#FF9101",
            },
            yellow: {
                100: "#fff9db",
                200: "#ffefb2",
                300: "#ffe589",
                400: "#ffdb5f",
                500: "#fbbf24",
                600: "#e8a31e",
                700: "#d48b19",
            },
            blue: {
                100: "#c8e3f5",
                200: "#a0cde8",
                300: "#51a2ce",
                400: "#51a2ce",
                500: "#299dc1",
                600: "#51a2ce",
                700: "#03508c",
                800: "#02356d",
                900: "#011b4e",
            },
            green: {
                100: "#EAF8F2",
                200: "#C1E7D9",
                300: "#98D6C0",
                400: "#6EC5A7",
                500: "#2FAB73",
                600: "#1A6046",
            },
            red: {
                100: "#FCD5D5",
                200: "#F9A3A3",
                300: "#F37171",
                400: "#EF4040",
                500: "#EB0F0F",
                600: "#960202",
            },
        },
        extend: {},
    },

    defaultTheme: "mytheme", // 👈 Esta línea es la clave
    // Configuración de variantes
    variants: {
        extend: {
            boxShadow: ["active", "hover"],
        },
    },
    // Plugins adicionales
    plugins: [require("daisyui")],
};
