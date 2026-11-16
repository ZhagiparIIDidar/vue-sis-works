import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import App from './App.vue'

dayjs.locale('ru')

createApp(App).use(createPinia()).use(Antd).mount('#app')
