import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar/index.js';

export default hopeTheme({
  hostname: 'https://vuepress-theme-hope-docs-demo.netlify.app',
  // 文章显示的默认作者
  author: {
    name: 'Mr.XiaoMing',
    url: 'https://github.com/tmxk-mmm/my-notes',
  },
  // 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: 'iconfont',

  // 网站图标
  logo: './logo.png',
  // 导航栏上的个人仓库地址
  repo: 'tmxk-mmm/my-notes',

  // 自定义仓库链接文字-默认从repo中自动推断为"GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: 'GitHub',

  // 全屏按钮
  fullscreen: true,

  // 返回顶部按钮-下滑100px后显示
  backToTop: true,

  // 是否在导航栏内显示仓库链接-默认为true
  repoDisplay: true,

  // 页面显示信息
  pageInfo: ['Author', 'Date', 'Category', 'Tag', 'ReadingTime'],
  // 文章所在目录
  docsDir: 'src',
  // 文档存放的分值，默认为 "main"
  docsBranch: 'master',

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  footer: '小明の学习笔记',
  // 显示页脚
  displayFooter: true,

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234'],
    },
  },
  // 博客配置
  blog: {
    // 头像
    avatar: '/logo.png',
    // 名称
    name: 'Mr.Xiaoming',
    // 是否是圆形头像
    roundAvatar: true,
    // 个人描述
    description: '离群索居者，不是野兽，便是神灵',
    // 社交媒体
    medias: {
      Github: 'https://github.com/tmxk-mmm',
    },
    // 博客的侧边栏设置
    sidebarDisplay: 'mobile',
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: '小明の时光轴🍃',
  },
  // page meta
  metaLocales: {
    editLink: '编辑此页',
  },

  plugins: {
    // 在MD文件中启用的组件
    components: {
      components: [
        // 为站点提供了在MD文档中自定义颜色的徽章
        'Badge',
        // 为站点提供了在MD文档中加载B站视频的功能，但是不建议使用
        'BiliBili',
        // 为站点提供了在MD文档中加载PDF阅读器的功能，但是不建议使用
        // 原因一：PDF书籍较大，上传到码云后会大量占用码云空间
        // 原因二：当PDF阅读器较多的时候，将MD文档渲染成HTML页面比较耗费性能，使页面加载速度变慢
        'PDF',
      ],
    },
    // 代码复制功能-vuepress-plugin-copy-code2
    // copyCode: {
    //   // 在移动端也可以实现复制代码
    //   showInMobile: true,
    //   // 代码复制成功提示消息的时间-ms
    //   duration: 3000,
    //   // 纯净模式
    //   fancy: true,
    // },

    // You should generate and use your own comment service
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,

      // install chart.js before enabling it
      // chart: true,

      codetabs: true,

      // insert component easily
      // component: true,

      demo: true,

      // install echarts before enabling it
      // echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ['ts', 'vue'],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install @vue/repl before enabling it
      // vuePlayground: true,
    },
    blog: {
      excerptLength: 0,
    },
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
