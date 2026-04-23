export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092C56",
        primaryHover: "#081F5C",
        secondary: "#225688",
        accent: "#334EAC",
        highlight: "#567CBD",

        bgMain: "#F0F5F4",
        bgSoft: "#FFF9F0",
        bgPaper: "#F7F2EB",

        lightBlue: "#A9CBE0",
        softBlue: "#BAD6EB",
        mutedBlue: "#668CA9",
        skyBlue: "#7096D1",
        paleBlue: "#D0E3FF",
        greyBlue: "#C8D9E6",

        textPrimary: "#2F4156",
        textSecondary: "#668CA9",
      },
    },
  },
  plugins: [],
}