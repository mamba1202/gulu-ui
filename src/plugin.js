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
            currentToast = creatToast({ Vue, message, propsData: toastOptions })
        }
    }
}




/*helper*/ 
function creatToast({ Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: propsData

    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}