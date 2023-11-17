import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './components/HomePage.vue';
import ContactPage from './components/ContactPage.vue';
import AboutPage from './components/AboutPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
            {path: '/', component: HomePage},
            {path: '/about', component: AboutPage},
            {path: '/contact', component: ContactPage}
    ]
})


export default router;