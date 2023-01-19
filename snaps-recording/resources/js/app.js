import "./bootstrap";

import { createApp } from "vue";

import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/tools",
            name: "Tools",
            component: () => import("./pages/Tools.vue"),
        },
        {
            path: "/",
            name: "Project",
            component: () => import("./pages/Project.vue"),
        },
        {
            path: "/channels",
            name: "channel",
            component: () => import("./pages/Channel.vue"),
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("./pages/Contact.vue"),
        },
        {
            path: "/analytics",
            name: "analytics",
            component: () => import("./pages/Analytics.vue"),
        },
        {
            path: "/settings",
            name: "settings",
            component: () => import("./pages/Settings.vue"),
        },
    ],
});

createApp(App).use(router).mount("#app");
