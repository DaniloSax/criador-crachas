import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { VueMaskDirective } from 'v-mask'
import { cpf } from 'cpf-cnpj-validator'

import './plugins/firebase'
import './plugins/vee-validate'

Vue.directive('mask', VueMaskDirective);
Vue.filter('cpfFormat', (value) => {
    return cpf.format(value)
})

Vue.config.productionTip = false


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')