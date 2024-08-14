/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/page/MainPage';
import ProductPage from '@/page/ProductPage';
import NotFoundPage from '@/page/NotFoundPage';
import CartPage from '@/page/CartPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'main', component: MainPage },
  { path: '/product/:id', name: 'product', component: ProductPage },
  { path: '/cart/', name: 'cart', component: CartPage },
  { path: '*', name: 'notFound', component: NotFoundPage },
];

const router = new VueRouter({
  routes,
});

export default router;
