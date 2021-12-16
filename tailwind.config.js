module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern":
          "url('src/assets/images/orderSummary/pattern-background-desktop.svg')",
      },
      fontFamily: {
        redHatDisplay: ["Red Hat Display"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
