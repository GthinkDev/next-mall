'use client'

import * as React from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function ModeToggle() {
	const { setTheme, resolvedTheme, theme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	// 避免服务端渲染时的主题不匹配
	React.useEffect(() => {
		setMounted(true)
		
		// 监听系统主题变化
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		const handleChange = () => {
			// 当系统主题变化且当前设置为跟随系统时，手动触发主题更新
			if (theme === 'system') {
				setTheme('system')
			}
		}
		
		mediaQuery.addEventListener('change', handleChange)
		
		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [theme, setTheme])

	if (!mounted) {
		return null
	}

	// 获取当前主题对应的图标
	const getThemeIcon = () => {
		if (theme === 'system') {
			return <Monitor className='h-[1.2rem] w-[1.2rem]' />
		}
		return resolvedTheme === 'dark' ? 
			<Moon className='h-[1.2rem] w-[1.2rem]' /> : 
			<Sun className='h-[1.2rem] w-[1.2rem]' />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					{getThemeIcon()}
					<span className='sr-only'>切换主题</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem 
					onClick={() => setTheme('light')}
					className={theme === 'light' ? 'bg-accent' : ''}
				>
					浅色
				</DropdownMenuItem>
				<DropdownMenuItem 
					onClick={() => setTheme('dark')}
					className={theme === 'dark' ? 'bg-accent' : ''}
				>
					深色
				</DropdownMenuItem>
				<DropdownMenuItem 
					onClick={() => setTheme('system')}
					className={theme === 'system' ? 'bg-accent' : ''}
				>
					跟随系统
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
