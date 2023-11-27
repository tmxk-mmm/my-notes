import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "博客主页", icon: "blog", link: "/blog/" },
  { text: "代码笔记", icon: "code", link: "/codenotes/" },
  { text: "问题整理", icon: "code", link: "/question/" },
  {
    text: "占位",
    icon: "book",
    link: "https://www.baidu.com/",
  },
]);
