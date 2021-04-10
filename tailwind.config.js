module.exports = {
  darkMode: "class", // or 'media' or 'class'
  purge:
    process.env.NODE_ENV === "production"
      ? ["./src/**/*.html", "./src/**/*.tsx"]
      : [],
  theme: {},
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
