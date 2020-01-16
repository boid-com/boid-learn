const routes = [
  {path: "/", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/Index.vue") }]},
  {path: "/learn", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/Learn.vue") }]},
  {path: "/specials", component: () => import("layouts/MyLayout.vue"), children: [{ path: "", component: () => import("pages/Specials.vue") }]}
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
