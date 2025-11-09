import type { FC } from 'react'
import React, { memo } from 'react'

const Page: FC = () => {
	return (
		<section className='cardBase'>
			<h1 className='title'>商品设置-标签管理</h1>
		</section>
	)
}

export default memo(Page)
