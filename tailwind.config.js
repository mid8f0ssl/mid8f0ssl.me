module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nb-lavender': '#a388ee',
        'nb-paleviolet': '#D4A1ff',
        'nb-crystal': '#A7DBD8',
        'nb-skyblue':'#87CEEB'
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      screens: {
        m1000: { raw: '(max-width: 1000px)' },
        m900: { raw: '(max-width: 900px)' },
        m850: { raw: '(max-width: 850px)' },
        m800: { raw: '(max-width: 800px)' },
        m750: { raw: '(max-width: 750px)' },
        m700: { raw: '(max-width: 700px)' },
        m650: { raw: '(max-width: 650px)' },
        m600: { raw: '(max-width: 600px)' },
        m550: { raw: '(max-width: 550px)' },
        m500: { raw: '(max-width: 500px)' },
        m450: { raw: '(max-width: 450px)' },
        m400: { raw: '(max-width: 400px)' },
        m350: { raw: '(max-width: 350px)' },
      },
    },
  },
  plugins: [],
}
