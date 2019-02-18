import Vue from 'vue'
import App from './App.vue'
import test from './test.vue'

new Vue({
    el: '#app',
    components: {
        'mytest': test
    },
    //render: h => h(App)
})