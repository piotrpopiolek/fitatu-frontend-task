import Vue from 'vue';
import VueRouter from 'vue-router';
import EmployeesList from '@pages/EmployeesList';
import Edit from '@pages/Edit';
import About from '@pages/About';
import Contact from '@pages/Contact';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'list'
    },
    {
      path: '/list',
      name: 'employeesList',
      component: EmployeesList
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});

export default router;
