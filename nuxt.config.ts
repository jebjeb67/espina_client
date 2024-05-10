// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  }
}