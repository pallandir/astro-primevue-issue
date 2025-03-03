import type { App } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Button from "primevue/button";

export default (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
  app.component("Button", Button);
};
