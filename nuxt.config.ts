// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'AI BOX',
      meta: [
        { name: 'description', content: 'AI BOX' },
        { name: 'version', content: '1.0.0' }
      ]
    }
  },
  css: ['/assets/scss/base/base.scss'], // 전역 scss
  build: {
    transpile: ['vuetify']
  },
  plugins: ['~/plugins/vue-dompurify-html.ts'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: '/assets/scss/override.scss'
            }
          })
        );
      });
    }
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark'
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 전역 변수
          additionalData: '@use "~/assets/scss/variables.scss" as *;'
        }
      }
    }
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  sourcemap: {
    server: false,
    client: false
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.PUBLIC_API_BASE,
      nodeEnv: process.env.PUBLIC_NODE_ENV,
      loginUrl: process.env.PUBLIC_LOGIN_URL,
      logoutUrl: process.env.PUBLIC_LOGOUT_URL,
      userInfo: process.env.PUBLIC_USER_INFO_URL
    }
  }
});
