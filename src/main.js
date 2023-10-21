import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'

import './assets/tailwind.css'

const pinia = createPinia()
watch(
    pinia.state,
    (state) => {
        // console.log(JSON.stringify(state))
        // console.log(state)
        // console.log(JSON.stringify(pinia.state.value.user))
        localStorage.setItem('accounts', JSON.stringify(state.user.accounts))
        localStorage.setItem('chainId', JSON.stringify(state.user.chainId))
        localStorage.setItem('DAIBalance', JSON.stringify(state.user.DAIBalance))
        localStorage.setItem('isConnected', JSON.stringify(state.user.isConnected))
    },
    { deep: true }
)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(VeeValidatePlugin)
app.mount('#app')
