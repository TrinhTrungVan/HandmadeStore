import React from 'react'
import {formatter} from '@/lib/utils'
import {format} from 'date-fns'

import ProductClient from './components/client'
import {ProductColumn} from './components/columns'
import getProducts from '@/actions/get-products'

const ProductsPage = async () => {
  const res = await getProducts({sortBy: 'createdAtDesc'})

  const formattedData: ProductColumn[] = res.map((item: any) => ({
    id: item.id,
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(new Date(item.createdAt), 'MMMM do, yyyy'),
  }))

  return (
    <div className="flex-1 p-8 pt-6">
      <ProductClient data={formattedData} />
    </div>
  )
}

export default ProductsPage
