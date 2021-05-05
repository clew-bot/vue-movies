import Vue from "vue"
import App from "./App";

import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);






new Vue ({

    render: (h) => h(App)
}).$mount('#app')