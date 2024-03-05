import { sidebar } from "vuepress-theme-hope";
import { question } from "./question/index.js";
import { native } from "./question/web/native/index.js"
import { java } from "./java/index.js"
import { harmonyOS4 } from "./harmonyOS/harmonyOS4.js"
export default sidebar({
    "/question/": question,
    "/question/web/native/": native,
    "/code/java/": java,
    "/code/java/javaSE/javaSE基础": "structure",
    "/code/harmonyOS/4.0": harmonyOS4,
});
