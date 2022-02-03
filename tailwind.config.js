module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-order-summary":
          "url('src/assets/images/orderSummary/pattern-background-desktop.svg')",
        "bg-profile-card":
          "url('src/assets/images/profileCard/bg-pattern-card.svg')",
        "bg-profile-card-top":
          "url('src/assets/images/profileCard/bg-pattern-top.svg')",
        "bg-profile-card-bottom":
          "url('src/assets/images/profileCard/bg-pattern-bottom.svg')",
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
