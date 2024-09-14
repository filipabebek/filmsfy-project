import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NewAndPopularView from '@/views/NewAndPopularView.vue';
import SupportView from '@/views/SupportView.vue';
import ActionView from '@/views/ActionView.vue';
import AdventureView from '@/views/AdventureView.vue';
import HorrorView from '@/views/HorrorView.vue';
import AnimeView from '@/views/AnimeView.vue';
import WishlistView from '@/views/WishlistView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,

        },
        {
            path: '/new-popular',
            name: 'newandpopular',
            component: NewAndPopularView,
        },
        {
            path: '/support',
            name: 'support',
            component: SupportView,
        },
        {
            path: '/genres/action',
            name: 'action',
            component: ActionView,
        },
        {
            path: '/genres/adventure',
            name: 'adventure',
            component: AdventureView,
        },
        {
            path: '/genres/horror',
            name: 'horror',
            component: HorrorView,
        },
        {
            path: '/genres/anime',
            name: 'anime',
            component: AnimeView,
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: WishlistView,
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
    ]
});

function mustRefresh() {
    router.to({ path: router.currentRoute.value.path, force: true });
}

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    try {
        if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
            next('/login');
        } else {
            next();
        }
    } catch (error) {
        console.error('Error in beforeEach hook:', error);
        next('/error');
    }
});

export default router;