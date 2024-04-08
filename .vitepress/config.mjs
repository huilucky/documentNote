import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ahui的笔记小站",
  description: "记录学习的点滴",
  themeConfig: {
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    sidebar: false, // 关闭侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示
    outlineTitle: "目录",
    outline: [2,6],
    logo: 'logo.png',  // 站点 logo
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Java', link: '/docs/java/basic/collection' },
      { text: 'Golang', link: '/' },
      { text: '其它', link: '/' },
    ],

    sidebar: [
      {
        text: 'Java',
        collapsed: true,
        items: [
          { text: '集合', link: 'docs/java/basic/collection'},
          { text: '并发编程', link: '/docs/java/basic/concurrent' },
          { text: '网络编程', link: '/docs/java/basic/io' },
          { text: 'JVM', link: '/docs/java/basic/jvm' },
          { text: '线程池', link: '/docs/java/basic/thread' },
        ]
      },

      {
        text: '框架',
        collapsed: true,
        items: [
          { text: 'Spring', link: 'docs/java/frame/spring/spring'},
          { text: 'SpringMVC', link: '/docs/java/frame/springBoot' },
          { text: 'Mybatis', link: '/docs/java/frame/mybatis' },
          { text: 'SpringBoot', link: '/docs/java/frame/springMVC' },
        ]
      },


    ],

    // sidebar: [
    //   {
    //     text: 'Java',configsidebarGuide
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

      // sidebar: { 
    //   "/frontend/react": set_sidebar("frontend/react"), 
    //   "/backend/rabbitmq": set_sidebar("backend/rabbitmq") 
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/huilucky/documentNote' }
    ],

    footer: {
      copyright: "Copyright@ 2024 AHui"
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },


  }
})