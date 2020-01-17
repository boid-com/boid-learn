const routes = [
  {path: "/", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/Index.vue") }]},
  {path: "/learn-basic-level-1", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/learn-basic-level-1.vue") }]},
  {path: "/special-earthday2020", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/special-earthday2020.vue") }]}
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
