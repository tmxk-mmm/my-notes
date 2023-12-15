import { arraySidebar } from "vuepress-theme-hope";
import { css } from './css'
import { js } from './js'
export const native = arraySidebar([
    // "",
    {
        text: "原生问题",
        icon: "creative",
        // prefix: "native/",
        // children: [...css, ...js],
        children: "structure",
    }
])
