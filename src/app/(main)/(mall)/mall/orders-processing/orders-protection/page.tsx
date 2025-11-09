import type { FC } from 'react'
import React, { memo } from 'react'

const Page: FC = () => {
	return (
		<section className='flex flex-col gap-2 h-full'>
			<div className='cardBase'>1</div>
			<div className='cardBase  flex-1'>1</div>
			<div className='cardBase'>1</div>
		</section>
	)
}

export default memo(Page)
