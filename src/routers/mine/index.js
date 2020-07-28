export default{
    path:'/mine',
    component:() =>import('@/views/Mine'),
    children: [
		{
			path : "city",
			component: () => import('@/components/City')
		},{
			path : "hotPlaying",
			component: () => import('@/components/HotPlaying')
		},{
			path : "comingSoon",
			component: () => import('@/components/ComingSoon')
		},{
			path : "search",
			component: () => import('@/components/Search')
        },
    ]

}