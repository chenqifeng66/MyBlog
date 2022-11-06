module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  // 主题配置
  themeConfig: {
    // logo
    logo: "/assets/img/logo.png",
    // 是否开启导航栏
    // navbar: false,
    // 导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "关于", link: "/about/" },
      { text: "External", link: "https://google.com" },
      {
        text: "Languages",
        ariaLabel: "Language Menu",
        items: [
          {
            text: "Group1",
            items: [
              { text: "item1", link: "/group1/item1" },
              { text: "item2", link: "/group1/item2" },
            ],
          },
          {
            text: "Group2",
            items: [
              { text: "item1", link: "/group2/item1" },
              { text: "item2", link: "/group2/item2" },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "Group 1", // 必要的
        path: "/foo/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/"],
      },
      {
        title: "Group 2",
        children: [
          /* ... */
        ],
        initialOpenGroupIndex: -1, // 可选的, 默认值是 0
      },
    ],
  },
};
