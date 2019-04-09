import Toast from './toast.vue'
// export default {
//     install(Vue, options) {
//         Vue.prototype.$toast = function (message,toastOptions) {
//             let Constructor = Vue.extend(Toast)
//             let toast = new Constructor({
//                 propsData: toastOptions
//                     //closeButton: toastOptions.closeButton

//             }) //实例
//             toast.$slots.default = [message]
//             toast.$mount()
//             document.body.appendChild(toast.$el)
//         }
//     }
// }


let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOptions) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = creatToast({ 
                Vue,
                 message,
                  propsData: toastOptions,
                  onClose:()=>{
                      currentToast = null
                  }
                 })
        }
    }
}




/*helper*/ 
function creatToast({ Vue, message, propsData,onClose }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: propsData

    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}