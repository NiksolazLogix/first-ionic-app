import { RouteRecordRaw } from 'vue-router';
import Tabs from '@/views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/tabs/list'
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "list",
      },
      {
        path: "list",
        component: () => import("@/views/ImageDetail.vue"),
      },
      {
        path: "upload",
        component: () => import("@/views/AllUploads.vue"),
      },
      {
        path: "geolocation",
        component: () => import("@/views/Geolocation.vue"),
      },
      {
        path: "gender",
        component: () => import("@/views/Gender.vue"),
      },
    ],
  }
];

export default routes
