import { arraySidebar } from "vuepress-theme-hope";
// import { native } from "./web/native.js"
export const question = arraySidebar([
    "",
    {
        text: "前端问题",
        icon: "creative",
        prefix: "web/",
        children: ["native/", "layui/", "vue/", "miniprogram/"],
    },
    {
        text: "后端问题",
        icon: "creative",
        prefix: "backend/",
        children: [],
    },
])
