import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)



const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)



app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
