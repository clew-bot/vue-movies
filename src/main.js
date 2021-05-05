import Vue from "vue"
import App from "./App";
import VueRouter from "vue-router";
import NominationList from "./components/NominationList"
import MovieList from "./components/MovieList"
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", name: "Movies", component: MovieList},
        {path: "/favorites", name: "favorites", component: NominationList},
      
       
     
    ]
})




new Vue ({
    router,
    
    render: (h) => h(App)
}).$mount('#app')