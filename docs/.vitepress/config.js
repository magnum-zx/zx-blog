export default {
	base: '/zx-blog/',
	title: 'zx-blog', //站点标题
	description: '记录一下本人的学习过程', //mate标签description，多用于搜索引擎抓取摘要
	lastUpdated: true,
	markdown: {
		lineNumbers: true, //显示代码行数
	},
	themeConfig: {
		siteTitle: 'ZX的博客',
		// logo: "/logo.png",
		nav: [{ text: 'github', link: 'https://github.com/magnum-zx' }],
		socialLinks: [{ icon: 'github', link: 'https://github.com/magnum-zx' }],
		sidebar: getSidebar(),
	},
}

function getSidebar() {
	return [
		{
			text: 'JS手写题',
			items: [
				{
					text: 'Introduction',
					link: '/articles/jsCode/',
				},
				{
					text: '实现Promise',
					link: '/articles/jsCode/Promise',
				},
				{
					text: '实现Promise类方法',
					link: '/articles/jsCode/PromiseClassFunction',
				},
				{
					text: '实现发布订阅模式',
					link: '/articles/jsCode/发布订阅模式',
				},
				{
					text: '实现函数柯里化',
					link: '/articles/jsCode/柯里化',
				},
				{
					text: '实现数组拍平',
					link: '/articles/jsCode/数组拍平',
				},
			],
		},
	]
}
