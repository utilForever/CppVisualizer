import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueCodemirror)

new Vue({
  render: h => h(App),
}).$mount('#app')
