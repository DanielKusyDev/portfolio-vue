import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import VueLazyload from 'vue-lazyload';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleDown, faLaptopCode, faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import clickOutside from '@/directives/click-ouside.js';
import Parallax from "@/components/Parallax";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/scss/main.scss"
import VueMarkdown from 'vue-markdown';

library.add(faArrowCircleDown);
library.add(faLaptopCode);
library.add(faBriefcase);
library.add(faHome);
Vue.config.productionTip = false

locale.use(lang);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueLazyload, {
    observer: true,
    observerOptions: {
        rootMargin: '0px',
        threshold: 0.1
    }
});
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('vue-markdown', VueMarkdown);
Vue.directive('click-outside', clickOutside);
Vue.mixin({
    mounted() {
        let { bodyClass } = this.$options;
        if (bodyClass) {
            document.body.classList.add(bodyClass);
        }
    },
    beforeDestroy() {
        let { bodyClass } = this.$options;
        if (bodyClass) {
            document.body.classList.remove(bodyClass);
        }
    }
});
Vue.component(Parallax.name, Parallax);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
