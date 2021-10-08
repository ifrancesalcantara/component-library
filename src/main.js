import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import bugsnag from '@bugsnag/js'
import bugsnagVue from '@bugsnag/plugin-vue'
import '@mdi/font/css/materialdesignicons.css'

import Vuetify, {
  VMenu,
  VTextField,
  VDatePicker
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
import en from 'vuetify/es5/locale/en'
import es from 'vuetify/es5/locale/es'

import { i18n } from './locale'

import VueResource from 'vue-resource'

window.moment = require('moment')
window.moment.locale((navigator.language || navigator.userLanguage).split('-')[0] === 'es' ? 'es' : 'en')
window.tz = require('moment-timezone')
var pjson = require('../package.json')

Vue.config.productionTip = false

const bugsnagClient = bugsnag({ apiKey: '354966e47b5c36e3076f580a61c7d233', appVersion: pjson.version })
bugsnagClient.use(bugsnagVue, Vue)

const locale = (navigator.language || navigator.userLanguage).split('-')[0] === 'es' ? 'es' : 'en'

Vue.use(Vuetify, {
  lang: {
    locales: { en, es },
    current: locale
  },
  locale,
  components: {
    VMenu,
    VTextField,
    VDatePicker
  },
  directives: {
    Ripple
  }
})

Vue.use(VueResource)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
