import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
const sidebar = require('../../utils/sidebar');

// 图片点击缩放
// import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  plugins: [
    // mediumZoomPlugin({
    //   // 配置项
    // }),
  ],

  theme: defaultTheme({
    // 在这里进行配置
    // 开启颜色模式切换
    colorModeSwitch: true,
    contributors: true,
    sidebar,
    // navbar: [
    //   // NavbarItem
    //   {
    //     text: 'React',
    //     link: '/react/',
    //   },
    //   // NavbarGroup
    //   {
    //     text: '博客',
    //     link: '/blog/',
    //     // children: ['/group/foo.md', '/group/bar.md'],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
  }),
});
