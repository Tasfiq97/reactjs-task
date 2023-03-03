/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://images.squarespace-cdn.com/content/v1/6176fee0c924795e1be08e18/8cc91305-da33-4109-90ce-58e447316bd8/sincerely-media-HoEYgBL_Gcs-unsplash.jpg?format=2500w)",

      },
      fontFamily:{
        hind:['Hind Siliguri', 'sans-serif']
      }
    },
  },
  plugins: [],
}
