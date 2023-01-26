/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        'layout': 'auto 1fr auto'
      },
      colors:{
        'logo-main': '#9b0404'
      },
      backgroundImage: {
        'hero-pattern': 'url("../public/image/gallery/norway_bg.jpg")',
        'group-people': "url('../public/image/gallery/group.jpeg"
      },
      width: {
        '85':'85%',
        '400':'400px',
        '1200': '1200px'
      },
      height: {
        '200': '200px'
      },
      minHeight:{
        '40':'40rem'
      },
      minWidth:{
        '30':'30rem'
      },
      
      aspectRatio: {
        '2/1':'2/1',
        '3/2':'3/2'
      },
    borderRadius: {
      'tl': "90px"
    }
      
    },
    
  },
  plugins: [],
}
