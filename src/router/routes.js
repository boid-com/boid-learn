const routes = [
  {path: "/", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/Index.vue") }]},
  {path: "/learn-basic-lvl1", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/learn-basic-lvl1.vue") }]},
  {path: "/learn-basic-lvl2", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/learn-basic-lvl2.vue") }]},
  {path: "/sp-earthday2020", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/sp-earthday2020.vue") }]}
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
