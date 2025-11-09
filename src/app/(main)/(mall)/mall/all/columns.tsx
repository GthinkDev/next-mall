'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string
	amount: number
	status: 'pending' | 'processing' | 'success' | 'failed'
	email: string
}

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: 'status',
		header: '排序',
	},
	{
		accessorKey: 'email',
		header: '商户名称',
	},
	{
		accessorKey: 'email',
		header: '商品',
	},
	{
		accessorKey: 'email',
		header: '价格',
	},
	{
		accessorKey: 'email',
		header: '库存',
	},
	{
		accessorKey: 'email',
		header: '实际销量',
	},
	{
		accessorKey: 'amount',
		header: '提交时间',
	},
	{
		accessorKey: 'amount',
		header: '审核时间',
	},
	{
		accessorKey: 'amount',
		header: '审核状态',
	},
	{
		accessorKey: 'amount',
		header: '操作',
	},
]
