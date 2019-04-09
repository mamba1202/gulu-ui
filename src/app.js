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
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'

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
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-pane',TabsPane)
Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
        selectedTab: 'sports'
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
    },
    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('bottom')
        },
        showToast3() {
            this.showToast('middle')
        },
        showToast(position) {
            this.$toast(`哈哈${parseInt(Math.random() * 100)},我是message`, {
                //position: 'bottom',
                position,
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
        }
    }
})

