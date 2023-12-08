import { arraySidebar } from "vuepress-theme-hope";
import { css } from './css'
export const native = arraySidebar([
    // "",
    {
        text: "原生问题",
        icon: "creative",
        // prefix: "native/",
        children: [...css, "js"],
    }
])
