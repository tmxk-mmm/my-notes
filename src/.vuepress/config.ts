import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/my-notes/",

  lang: "zh-CN",
  title: "小明学习笔记",
  description: "小明学习笔记",
  head: [['link', { rel: 'icon', href: './favicon.ico' }]],

  theme,
  plugins: [
    // 注册全局组件的插件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    // 搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as string[],
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag as string[],
          formatter: "标签：$content",
        },
      ],
    }),
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
