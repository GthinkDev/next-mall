'use client'

import type { FC, ReactNode } from 'react'
import React, { memo } from 'react'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header'

interface IProps {
	children: ReactNode
}

const Layout: FC<IProps> = (props) => {
	const { children } = props

	return (
		<SidebarProvider className={'h-full p-2'}>
			<AppSidebar />
			<SidebarInset className={'flex flex-1 flex-col gap-2 max-w-full overflow-hidden'}>
				<Header />
				<main className={'h-full w-full overflow-auto'}>{children}</main>
			</SidebarInset>
		</SidebarProvider>
	)
}

export default memo(Layout)
