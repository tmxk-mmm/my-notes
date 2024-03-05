import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "博客主页", icon: "blog", link: "/blog/" },
  {
    text: "代码笔记",
    icon: "code",
    children: [
      {
        text: "java",
        icon: "java",
        link: "/code/java",
        activeMatch: "^/code/$",
      },
      {
        text: "遥遥领先",
        children: ["/code/harmonyOS/4.0"],
      },
    ]
  },
  { text: "问题整理", icon: "code", link: "/question/" },
  {
    text: "文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/get-started/",
  },
]);
