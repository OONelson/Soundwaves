import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Blogs from '../views/Blogs.vue';
import About from '../views/About.vue';
import Welcome from '../views/Welcome.vue';
import ContactUs from '../views/ContactUs.vue';
import User from '../views/User.vue';
import Details from '../views/Details.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'vue-sonner';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/shop',
			name: 'shop',
			component: Shop,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/blogs',
			name: 'blogs',
			component: Blogs
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/contactus',
			name: 'contactus',
			component: ContactUs
		},
		{
			path: '/',
			name: 'welcome',
			component: Welcome
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/details/:productId',
			name: 'details',
			component: Details
			// props: true
		}
	]
});

const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const removeListener = onAuthStateChanged(
			getAuth(),
			user => {
				removeListener();
				resolve(user);
			},
			reject
		);
	});
};

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (await getCurrentUser()) {
			next();
		} else {
			return (
				toast.error("you don't have access try logging in or sign up") &&
				next('/')
			);
		}
	} else {
		next();
	}
});

export default router;
