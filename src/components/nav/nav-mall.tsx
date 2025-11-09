import type { FC } from 'react'
import { memo } from 'react'
import { usePathname } from 'next/navigation'
import { SidebarGroupLabel } from '../ui/sidebar'
import { siteConfig } from '@/config/site'
import { MenuItem, MenuItemProps } from './items'

const NavMall: FC = () => {
	// 获取当前路径
	const currentPath = usePathname()
	// 使用any类型解决类型不匹配问题
	const data: any[] = siteConfig.navMall
	// 过滤掉无效数据，确保title存在且不为空
	const validItems = data.filter((item) => item && item.title !== undefined && item.title !== null && item.title !== '')

	return (
		<div className='menu w-full  gap-1'>
			<SidebarGroupLabel className='text-xs font-bold'>商城管理</SidebarGroupLabel>
			<ul className='flex flex-col gap-2'>
				{validItems.map((item, index) => (
					<MenuItem
						key={index}
						title={item.title}
						url={item.url}
						icon={item.icon}
						isActive={item.isActive}
						items={item.items}
					/>
				))}
			</ul>
		</div>
	)
}

export default memo(NavMall)
