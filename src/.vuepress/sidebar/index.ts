import { sidebar } from "vuepress-theme-hope";
import { question } from "./question/index.js";
import { native } from "./question/web/native/index.js"
import { java } from "./java/index.js"
export default sidebar({
    "/question/": question,
    "/question/web/native/": native,
    "/code/java/": java
});
