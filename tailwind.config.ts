/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        miami_red: '#C41230',
        miami_accent_red: '#AD102A',
        miami_light_tan: '#EDECE2',
        miami_gold: '#EFDB72',
        miami_warm_white: '#FAF9F7',
      },
      
      backgroundImage: {
        'miami-red-gradient': "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )",
        'library-logo-hori': "url('/ULB-Logos/Primary/Full-color and black text/Digital/jpeg/0721_PTier1_Libraries_HS_186KW_K_Digital.jpg')",
        'library-logo-vert': "url('/ULB-Logos/Primary/Full-color and black text/Digital/jpeg/0721_PTier1_Libraries_VS_186KW_K_Digital.jpg')",
        'bg-img-1': "url('/bg-hero.jpg')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'pattern': "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        'xs': '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};