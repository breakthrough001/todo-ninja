import Vue from "vue";
import VueRouter from "vue-router";
import TheDashboard from "../views/TheDashboard.vue";
import TheProjects from "../views/TheProjects.vue";
import TheTeam from "../views/TheTeam.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: TheDashboard,
  },
  {
    path: "/projects",
    name: "projects",
    component: TheProjects,
  },
  {
    path: "/team",
    name: "team",
    component: TheTeam,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
