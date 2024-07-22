import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import themeModified from './vuetify-pattern/themes';
import { icons } from '../utils/vuetifyIcon';

// vutify scss의 하단에서 호출됩니다.
// import '@/assets/scss/ui.scss';

export default defineNuxtPlugin(NuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: {
          colors: themeModified.colors,
          variables: themeModified.variables
        }
      }
    },
    defaults: {
      global: {
        ripple: false
      }
    },
    icons: {
      defaultSet: 'icons',
      aliases,
      sets: {
        icons
      }
    }
  });

  NuxtApp.vueApp.use(vuetify);
});
