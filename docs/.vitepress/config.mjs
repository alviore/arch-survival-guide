import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arch Linux 生存指南",
  description: "Arch Linux全流程生存指南：从零安装到深度优化，覆盖系统配置、故障修复与效能调优，提供可视化终端实录+模块化学习路径，遵循KISS原则持续同步官方更新，构建你的极简Linux工作流",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '🧭 基础指南',
        items: [
          { text: '📕 开始之前', link: '/guide/' }
        ]
      }
    ],


    sidebar: [
      {
        items: [
          { text: '📕 开始之前', link: '/guide/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dotcubecn/arch-survival-guide' }
    ],

    footer: {
      message: '采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 协议</a>',
      copyright: '由 <a href="https://dotcube.cc" target="_blank">DotCube</a> 与 ❤️️ 制作'
    },

    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到亮色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "回到顶部",

    editLink: {
      pattern: 'https://github.com/dotcubecn/arch-survival-guide/edit/main/docs/:path',
      text: '在 Github 上编辑'
    }
  },

  head: [
    ['link', { rel: 'stylesheet', href: '/theme/custom.css' }]
  ],
})


