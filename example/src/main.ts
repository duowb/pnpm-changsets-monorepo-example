import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import PkgB from '@duobo/pkg-b'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Vue.use(PkgB)

new Vue({
  render: h => h(App),
}).$mount('#app')
