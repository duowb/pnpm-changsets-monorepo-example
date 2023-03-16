import { VueConstructor } from "vue-demi";
import TestIcon from "../package/main.vue";
import { version } from '../package.json'

const install = (Vue: VueConstructor) => {
  Vue.component(TestIcon.name, TestIcon);
};

export default {
  install,
  version
};


export { TestIcon };

export * from '../package/type'