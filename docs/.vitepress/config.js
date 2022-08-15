export default {
	title: 'zx-blog', //站点标题
	description: '记录一下本人的学习过程', //mate标签description，多用于搜索引擎抓取摘要
	themeConfig: {
		siteTitle: 'ZX的博客',
		// logo: "/logo.png",
		nav: [{ text: 'github', link: 'https://github.com/magnum-zx' }],
		socialLinks: [{ icon: 'github', link: 'https://github.com/magnum-zx' }],
		sidebar: [
			{
				text: 'JS手写题',
				items: [
					{
						text: '实现Promise',
						link: '/articles/JS手写题/Promise',
					},
					{
						text: '实现Promise类方法',
						link: '/articles/JS手写题/PromiseClassFunction',
					},
					{
						text: '实现发布订阅模式',
						link: '/articles/JS手写题/发布订阅模式',
					},
					{
						text: '实现函数柯里化',
						link: '/articles/JS手写题/柯里化',
					},
					{
						text: '实现数组拍平',
						link: '/articles/JS手写题/数组拍平',
					},
				],
			},
			// {
			// 	text: 'example',
			// 	items: [
			// 	],
			// },
		],
	},
}
