module.exports = {
    title: 'python+selenium',
    description: '网站描述',
    base: '/selenium-doc/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    theme: 'reco',
    themeConfig: {
        locales: {
            '/': {
              label: '简体中文',
              selectText: '选择语言',
              lastUpdated: '上次编辑时间',
              sidebar: {
                '/': [
                  {
                    title: '基本',
                    children: [
                      
                    ],
                },
                  {
                    title: 'PHP',
                    children: [
                      '/zh/php/php基础.md'
                    ],
                },
                  {
                    title: '随记',
                    children: [
                      '/zh/Note/随记.md'                ],
                }
                ]
              }
            }
          },
          nav: [
            { text: 'Home', link: '/' },
            { text: 'github', link: 'https://github.com/liduapong/selenium-doc' },
          ],
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    }
  };