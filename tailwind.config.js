/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        searchBg: "url('/src/assets/images/waves-light.svg')",
        dSearchBg: "url('/src/assets/images/waves-dark.svg')",
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
    },
    colors: {
      primary: '#212529',
      secondary: '#6c757d',
      link: '#0784c3',
      link_hover: '#066a9c',
      tooltip: '#111b36',
      border: '#e9ecef',
      light: '#f8f9fa',
      danger: '#dc3545',
      success: '#00a186',
      transparent: 'transparent',
      white: 'white',
      tooltip: '#111b36',
      // dark mode color
      dBgLink: '#252525',
      dBorder: '#222',
      dPrimary: '#ccc',
      dSecondary: '#bbb',
      dBgColor: '#111',
      dLinkColor: '#6ab5db',
      dLinkHoverColor: '#9ccee7',
      dTooltipBg: '#333',
      dSubMenu: '#ccc',
      dSubColor: '#f5f5f5',
      dSubHoverBg: '#252525',
      dHeading: '#fafafa',
      dLightBg: '#151515',
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        // sm: '600px',
        // md: '728px',
        // lg: '921px',
        // xl: '1240px',
        '2xl': '1400px',
      },
    },
    fontSize: {
      xs: '0.785rem',
      cap: '0.75rem',
      small: '0.875em',
      submenu: '0.8203125rem',
      sm: '0.9375rem',
      base: '0.9062rem',
      xl: '1.1718rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
