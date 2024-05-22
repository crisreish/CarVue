import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CarListView from '@/views/CarListView.vue';
import CarFormView from '@/views/CarFormView.vue';
import CarDetails from '@/views/CarDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cars',
    name: 'car-list',
    component: CarListView
  },
  {
    path: '/add',
    name: 'car-add',
    component: CarFormView
  },
  {
    path: '/edit/:id',
    name: 'car-edit',
    component: CarFormView,
    props: true
  },
  {
    path: '/Car-details',
    name: 'car-details',
    component: CarDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
