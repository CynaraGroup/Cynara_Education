import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  title: "Cynara Education",
  description: "Powered by Cynara",
  markdown: {
    theme: {
      light: "catppuccin-macchiato",
      dark: "catppuccin-macchiato",
    },
  },
  themeConfig: {
    logo: './shutdown_prompt/img/Cynara横.png',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '软件产品', items:[
        { text: '关机提示', link: '/shutdown_prompt' },
        { text: '原神抽卡点名器', link: '/genishimpact_picker' },
      ]},
      { text: '赞助者', link: 'https://www.cynara.my/sponsor' },
      { text: '关于我们', link: 'https://www.cynara.my/about' },
    ],  

    editLink: {
      pattern: "https://github.com/CynaraGroup/Cynara_Education/edit/main/docs/:path", // 自己项目仓库地址
      text: "在 github 上编辑此页",
    },

    sidebar: [
      {
        text: '这是什么？',
        link: '/start',
      },
      {
        text: '离班提示',
        items: [
          { text: '简介', link: '/shutdown_prompt' },
          { text: '安装', link: '/shutdown_prompt/manual' },
          { text: '编译', link: '/shutdown_prompt/build'},
        ]
      },
      {
        text: '原神抽卡点名器',
        items: [
          { text: '简介', link: '/genishimpact_picker' },
          { text: '安装', link: '/genishimpact_picker/manual' },
          { text: '在线使用', link: '/genishimpact_picker/online' },
          { text: '本地部署', link: '/genishimpact_picker/deploy' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CynaraGroup' },
      {
        icon: {
          svg: '<svg t="1755515357063" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4940" width="200" height="200"><path d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z" p-id="4941"></path></svg>'
        },
        link: 'mailto:support@cynara.my'
      }
    ],

    footer: {
        message: '<a href="https://icp.gov.moe/?keyword=20250202">萌ICP备20250202号</a>', 
        copyright: '2025 <a href="https://www.cynara.my">Cynara Group</a>. All rights reserved.' 
    },
  }
})
