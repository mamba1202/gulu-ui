module.exports = {
    title: '咕噜UI',
    description: '一个好用的UI框架',
    base:"/gulu-ui/",
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/mamba1202/' },
            { text: '欢迎Sart', link: 'https://github.com/mamba1202/lunzi' },
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
                    './components/popover',
                    './components/collapse',
                    './components/toast',
                ],
            }
        ]
    }
}
