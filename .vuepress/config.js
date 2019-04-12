module.exports = {
  title: 'demohi 的博客',
  description: '',
  plugins: [
    [
      'vuepress-plugin-yuque',
      {
        repoUrl: 'https://www.yuque.com/demohi/blog',
        home: {
          actionText: '博客',
          actionLink: '/intro/',
          footer: `Copyright © demohi`
        }
      }
    ]
  ]
};
