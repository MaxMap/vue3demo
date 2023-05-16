import { createRouter, createWebHashHistory } from 'vue-router'

let routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title:'首页'
        },
        component:()=>import('@/views/home/index.vue')
    },
    {
        path: '/vmodel',
        name: 'vmodel',
        meta: {
            title:'通信'
        },
        component:()=>import('@/views/vModel/index.vue')
    }
]

//导入生成的路由数据
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
  
export default router