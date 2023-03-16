import { PluginFunction, VueConstructor } from "vue";

import MyButton from "./components/MyButton.vue";

export { MyButton };

const install: PluginFunction<any> = (
  Vue: VueConstructor
): void => {
  Vue.component("MyButton", MyButton);
};

export default {
  install,
  version: "1.0.0"
};
