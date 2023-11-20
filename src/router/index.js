import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VirtualView from "../views/VirtualView.vue";
import DedicatedView from "../views/DedicatedView.vue";
import RentView from "../views/RentView.vue";
import PanelView from "../views/PanelView.vue";
import PanelVirtual from "../views/Panel/PanelVirtual.vue";
import PanelFinance from "../views/Panel/PanelFinance.vue";
import Referals from "../views/Panel/Referals.vue";
import Settings from "../views/Panel/Settings/Settings.vue";
import MyServices from "../views/Panel/MyServices/MyServices.vue";
import MyServiceItem from "../views/Panel/MyServices/MyServiceItem/MyServiceItem.vue";
import PanelRent from "../views/Panel/PanelRent.vue";
import PanelDedicated from "../views/Panel/PanelDedicated.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/virtual',
      name: 'Virtual',
      component: VirtualView
    },
    {
      path: '/dedicated',
      name: 'Dedicated',
      component: DedicatedView
    },
    {
      path: '/rent',
      name: 'Rent',
      component: RentView
    },
    {
      path: "/panel",
      name: 'Panel',
      component: PanelView,
      children: [
        {
          path: 'rent',
          name: 'rentServer',
          component: PanelRent
        },
        {
          path: 'virtual',
          name: 'virtualServers',
          component: PanelVirtual
        },
        {
          path: 'dedicated',
          name: 'dedicatedServers',
          component: PanelDedicated
        },
        {
          path: 'finance',
          name: 'PanelFinance',
          component: PanelFinance
        },
        {
          path: 'referals',
          name: 'Referals',
          component: Referals,
        },
        {
          path: 'Settings',
          name: 'Settings',
          component: Settings
        },
        {
          path: 'myservices',
          name: 'My Services',
          component: MyServices,
        },
        {
          path: 'myservices/:id',
          name: 'MyServiceItem',
          component: MyServiceItem
        }
      ]
    }
  ]
})

export default router
