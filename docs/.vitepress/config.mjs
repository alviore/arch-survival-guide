import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Arch Linux 生存指南",
  description: "Arch Linux 生存指南：新手安装教程与疑难解答，涵盖系统调优技巧及滚动更新维护方案，提供持续更新的中文实践文档",
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
    ['link', { rel: 'stylesheet', href: '/theme/custom.css' }],
    ['meta', { name: 'keywords', content: 'Arch Linux安装教程, Pacman包管理, 滚动更新系统, Linux故障排除, 终端命令实录, AUR使用指南, systemd配置, 开发者环境优化, KISS原则实践, 中文Linux文档' }],
    ['meta', { name: 'author', content: 'DotCube' }],
    ['meta', { name: 'robots', content: 'index,follow' }],

  ],
})


