import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';


export default createRouter({
    history: createWebHistory(),  // createWebHashHistory() 대신 createWebHistory() 사용
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main,
        }
    ]
});
