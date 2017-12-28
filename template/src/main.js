{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
{{#router}}
import router from './router'
import plugin from 'vue-website-plugins/vue'
{{/router}}

Vue.config.productionTip = false
Vue.use(plugin, {router})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<router-view id="app"/>'
  {{/if_eq}}
})
