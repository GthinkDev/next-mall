import { Global } from '@/components/icons'
import {
	GalleryVerticalEnd,
	AudioWaveform,
	Command,
	TableProperties,
	CalendarCog,
	Rows3,
	SquareTerminal,
	Frame,
	PieChart,
	ChartNoAxesCombined,
	ShoppingCart,
	Store,
	ChartPie,
} from 'lucide-react'

export const siteConfig = {
	name: 'Next.js + HeroUI',
	description: 'Make beautiful websites regardless of your design experience.',
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},

	navMall: [
		{
			title: '数据看板',
			url: '/home',
			icon: <ChartPie size={18} />,
		},
		{
			title: '商城管理',
			url: '#',
			icon: <Store size={18} />,
			items: [
				{
					title: '商品列表',
					icon: <TableProperties size={18} />,
					items: [
						{
							title: '全部商品',
							url: '/mall/all',
						},
					],
				},
				{
					title: '商品设置',
					icon: <CalendarCog size={18} />,
					items: [
						{
							title: '商品分类',
							url: '/mall/mall-settings/category',
						},
						{
							title: '分类层级',
							url: '/mall/mall-settings/category-levels',
						},
						{
							title: '商品分组',
							url: '/mall/mall-settings/category-groups',
						},
						{
							title: '标签管理',
							url: '/mall/mall-settings/category-tags',
						},
						{
							title: '批量设置',
							url: '/mall/mall-settings/category-bulk',
						},
					],
				},
				{
					title: '订单管理',
					icon: <Rows3 size={18} />,
					items: [
						{
							title: '全部订单',
							url: '/mall/mall-orders/all',
						},
						{
							title: '待发货',
							url: 'mall/mall-orders/pending',
						},
						{
							title: '待付款',
							url: 'mall/mall-orders/paid',
						},
						{
							title: '待收货',
							url: 'mall/mall-orders/received',
						},
						{
							title: '已完成',
							url: '/mall/mall-orders/completed',
						},
						{
							title: '已关闭',
							url: '/mall/mall-orders/closed',
						},
					],
				},
			],
		},
		{
			title: '商城管理',
			url: '#',
			icon: <SquareTerminal size={18} />,
			items: [
				{
					title: '商品列表',
					icon: <SquareTerminal size={18} />,
					items: [
						{
							title: '全部商品',
							url: '#',
						},
					],
				},
			],
		},
	],
}
