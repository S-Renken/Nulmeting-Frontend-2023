// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/app.scss"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      }
    ],
    "nuxt-icons"
  ],
  imports: {
    dirs: ["stores"],
  },
  vite: {
    define: {
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/_breakpoints.scss" as *;',
        },
      },
    },
  }
});
