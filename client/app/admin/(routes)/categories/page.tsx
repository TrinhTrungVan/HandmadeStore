import React from 'react'
import {format} from 'date-fns'

import CategoryClient from './components/client'
import {CategoryColumn} from './components/columns'
import getCategories from '@/actions/get-categories'

const CategoriesPage = async () => {
  const categories = await getCategories()

  const formattedData: CategoryColumn[] = categories.map((item: any) => ({
    id: item.id,
    name: item.name,
    createdAt: format(new Date(item.createdAt), 'MMMM do, yyyy'),
  }))

  return (
    <div className="flex-1 p-8 pt-6">
      <CategoryClient data={formattedData} />
    </div>
  )
}

export default CategoriesPage
