import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "../node_modules/linyu/style.css"; //引入组件样式
import LINYU from "linyu"; //引入下载后的组件
const app = createApp(App)
app.use(LINYU); //注册
app.mount('#app')
