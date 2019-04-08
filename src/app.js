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


Vue.component('g-button', Button)  //全局的g-button组件
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
    },
    methods:{
inputChange(e){
    console.log(e.target.value)
}
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect

//单元测试
{
    const Constructor = Vue.extend(Button)  //把button组件变成一个构造函数
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })  //通过构造函数搞出一个实例
    button.$mount('#test')   //把实例挂载到test
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    //expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    button.$el.remove() //删除元素
    button.$destroy() //删除对象
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    console.log(useElement)
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    console.log(svg)
    //let order = window.getComputedStyle(svg).order
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq("1")
    button.$el.remove()
    button.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    console.log(svg)
    //let order = window.getComputedStyle(svg).order
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq("2")
    button.$el.remove()
    button.$destroy()
} {
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    gButton.$mount()
    let spy = chai.spy(function () {
        let button = gButton.$el
        button.click()  //调用
        expect(spy).to.have.been.called() //已经被调用了
    })
}
// catch(error){
//   window.errors=[error]
//}finally{
//   window.errors && window.errors.forEach((error)=>{
//      console.error(error.message)
//   })
//}

// {   //mock
//     const Constructor = Vue.extend(Button)
//     const gButton = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     })
//     gButton.$mount()
//     gButton.$on('click', function () {
//         expect(1).to.eq(1)
//     })
//     //希望这个函数被执行
//     let button =gButton.$el
//     button.click()
// }

