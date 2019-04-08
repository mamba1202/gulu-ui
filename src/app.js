import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Sider from './sider.vue'
import plugin from './plugin.js'

Vue.component('g-button', Button)  //全局的g-button组件
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
    },
    created() {
        // this.$toast('hello',{
        //     enableHtml: false
        // })
        // this.$toast('我是message', {
        //     closeButton: {
        //         text: '已充值',
        //         callback() {
        //             console.log('用户说他知道了')
        //         }
        //     }
        // })
        this.$toast('我是message', {
            position: 'middle',
            enableHtml: false,
            closeButton: {
                text: '已充值',
                callback() {
                    console.log('用户说他知道了')
                }
            },
            autoClose: false,
            autoCloseDelay: 3
        })
    },
    methods: {
        showToast() {

        }
    }
})

