import { createWebHistory, createRouter } from 'vue-router'



const routes = [
	{
		path: '/',
		redirect: '/index'
    },
    {
		path: '/index',
		component: () => import('@/view/Index/Index.vue')
    }
]



const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		// 切换页面时回到顶部
		return { top: 0 }
	},
})



export default router