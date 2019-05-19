module.exports = {
    title: '咕噜UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: "介绍",
                collapsable: false,
                children:[
                    '/introduce/'
                ]
            },
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    './components/button',
                    './components/tabs',
                    './components/input',
                    './components/grid',
                    './components/layout',
                    './components/toast',
                    './components/popover'
                ],
            }
        ]
    }
}
