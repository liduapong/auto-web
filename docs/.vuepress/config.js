module.exports = {
    title: '南空一旧',
    description: '网站描述',
    base: '/selenium-doc/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    theme: 'reco',
    themeConfig: {
      themePicker: {
        colorName1: 'red',
        colorName2: 'yellow',
        colorName3: 'blue'
      },
      type: 'blog',
          nav: [
            { text: 'Home', link: '/' },
            { text: 'github', link: 'https://github.com/liduapong/selenium-doc' },
          ],
          blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: 'Category' // 默认文案 “分类”
            },
            tag: {
              location: 3,     // 在导航栏菜单中所占的位置，默认3
              text: 'Tag'      // 默认文案 “标签”
            }
          },
      author: 'liduapong',
      huawei: true,
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    }
  };