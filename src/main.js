/* 
入口js 
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
new Vue({
    el:'#app',
    render:h=>h(App),
    router,
    store
})