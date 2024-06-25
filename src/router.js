import { createRouter, createWebHistory } from 'vue-router';
import WeatherWidget from './views/WeatherWidget.vue';

const routes = [
  {
    path: '/',
    name: 'WeatherWidget',
    component: WeatherWidget
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
