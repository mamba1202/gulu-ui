import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('g-button',Button)  //全局的g-button组件p
Vue.component('g-icon',Icon) 

new Vue({
    el: '#app',
})