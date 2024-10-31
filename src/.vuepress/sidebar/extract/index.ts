import { arraySidebar } from "vuepress-theme-hope";
// import { native } from "./web/native.js"
export const extract = arraySidebar([
    "",
    {
        text: "读书记录",
        icon: "<i class='fa-solid fa-pen'></i>",
        // prefix: "extract",
        children: ["读书记录"],
    },
    {
        text: "杂项",
        icon: "bi",
        // prefix: "extract",
        children: ["杂项"],
    },
])
