import { createRouter, createWebHistory } from 'vue-router';
import MovieDetails from '@/views/MovieDetails.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/movie/:id',
    name: 'movieDetails',
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
