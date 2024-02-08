import { createApp } from 'vue'
import App from './App.vue'
import './styles.css'
import router from "@/router.js"
import components from "@/components/components.js";



const  app = createApp(App);
app.use (router);
app.use (components);
app.mount('#app');

