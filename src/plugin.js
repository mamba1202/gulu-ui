import Toast from './toast.vue'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message,toastOptions) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: toastOptions
                    //closeButton: toastOptions.closeButton
                
            }) //实例
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}