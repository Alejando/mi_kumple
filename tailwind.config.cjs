module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        blanka: ['Blanka', 'sans-serif'],
        schibsted: ['Schibsted Grotesk', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
        luckiest: ['Luckiest Guy', 'cursive'],
        syncopate: ['Syncopate', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      colors: {
        'deep-purple': '#1a1a2e',
        // Ocean/ice palette aligned with public/background.png
        'theme-deep': '#0b1733',
        'theme-blue': '#2a5fbf',
        'theme-cyan': '#2fd3e6',
        'theme-lavender': '#aeb8ff',
        'theme-spark': '#e3b7ff',
      },
    },
  },
  plugins: [],
}
