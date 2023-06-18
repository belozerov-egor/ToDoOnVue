import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../components/HomePage.vue";
import TodoBlock from "../components/TodoBlock.vue";

const routes = [
    {
        path: '/ToDoOnVue',
        component: HomePage
    },
    {
        path: '/todo',
        component: TodoBlock
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
