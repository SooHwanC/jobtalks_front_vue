import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Join from '../pages/Join.vue';
import Login from '../pages/Login.vue';
import EssayInput from '../pages/EssayInput.vue'

const routes = [
    { path: '/', name: 'Main', component: Main },
    { path: '/join', name: 'Join', component: Join },
    { path: '/login', name: 'Login', component: Login },
    { path: '/essayinput', name: 'EssayInput', component: EssayInput }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;