/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        "protoapp-white-color": "#ffffff",
        "protoapp-dark-color": "#212529",
        "protoapp-hover-color": "#2248e2",
        "protoapp-hover-button-color": "#3fe3ee",
        "protoapp-card-yellow": "#ffc107",
        "protoapp-card-darkblue": "#17a2b8",
        "protoapp-span-yellow": "#b28705",
        "protoapp-span-darkblue": "#107180",
        "protoapp-footer-dark-color": "#343a40",
      },
    },
    fontFamily: {
      Roboto:["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true
    }
  },
  plugins: [],
}

