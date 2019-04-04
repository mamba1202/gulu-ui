// const expect = chai.expect;
// import Vue from 'vue'
// import Input from '../src/input.vue'

// Vue.config.productionTip = false
// Vue.config.devtools = false

// describe('Input', () => {
//     it('存在.', () => {
//         expect(Input).to.be.exist
//     })

//   //  describe('props', () => {
//         it('接收value', () => {
//             const Constructor = Vue.extend(Input)
//             const vm = new Constructor({
//                 propsData: {
//                     value: '1234'
//                 }
//             }).$mount()
//             const inputElement = vm.$el.querySelector('input')
//             expect(inputElement.value).to.equal('1234')
//             vm.$destroy()
//         })
//         it('接收disabled', () => {
//             const Constructor = Vue.extend(Input)
//             const vm = new Constructor({
//                 propsData: {
//                     disabled: false
//                 }
//             }).$mount()
//             const inputElement = vm.$el.querySelector('input')
//             expect(inputElement.disabled).to.equal(false)
//             vm.$destroy()
//         })
//         it('接收readonly', () => {
//             const Constructor = Vue.extend(Input)
//             const vm = new Constructor({
//                 propsData: {
//                     readonly: true
//                 }
//             }).$mount()
//             const inputElement = vm.$el.querySelector('input')
//             expect(inputElement.readOnly).to.equal(true)
//             vm.$destroy()
//         })
//         it('接收error', () => {
//             const Constructor = Vue.extend(Input)
//             const vm = new Constructor({
//                 propsData: {
//                     error: '你错了'
//                 }
//             }).$mount()
//             const useElement = vm.$el.querySelector('use')
//             expect(useElement.getAttribute('xlink:href')).to.equal("#i-error")
//             const errorMessage = vm.$el.querySelector('.errorMessage')
//             expect(errorMessage.innerText).to.equal('你错了')
//             vm.$destroy()
//         })
//    // })

//     describe('事件', () => {
//         const Constructor = Vue.extend(Input)
//             let vm
//             afterEach(() => {
//                 vm.$destroy()
//             })
//        it('支持change事件', () => {
//           vm = new Constructor({}).$mount()
//            const callback = sinon.fake();
//              //触发input的cahnge事件
//             let event = new Event('change')
//             let inputElement = vm.$el.querySelector('input')
//             inputElement.dispatechEvent(event)
//             expect(callback).to.have.been.calledWith(event)
//         })
//    })
// })


const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })


  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收 value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: false
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(false)
    })
    it('接收 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      vm = new Constructor({
        propsData: {
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          //触发input的change 事件
          let event = new Event(eventName);
          Object.defineProperty( //target只读属性  模拟'value'
            event, 'target', {
              value: {value: 'hi'}, enumerable: true
            }
          )
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith('hi')
        })
    })
  })
})