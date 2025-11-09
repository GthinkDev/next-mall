import { AppSidebar } from '@/components/app-sidebar'
import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import data from './data.json'
import Header from '@/components/header'

export default function Page() {
	return (
		<SidebarProvider className='flex gap-2'>
			<AppSidebar variant='floating' />
			<SidebarInset className='flex flex-col max-w-full overflow-hidden'>
				<Header />
				<SectionCards />
				<div className='w-full'>
					<ChartAreaInteractive />
				</div>
				<div className='flex-1 overflow-auto'>
					<DataTable data={data} />
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
