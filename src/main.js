import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import './assets/tailwind.css'

// 解决 tailwind 的样式覆盖
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App).use(router).mount('#app')
