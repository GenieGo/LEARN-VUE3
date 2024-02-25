import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

// 전역등록
import PostItem from '@/components/PostItem.vue'

const app = createApp(App)

app.component('PostItem', PostItem)

app.mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
