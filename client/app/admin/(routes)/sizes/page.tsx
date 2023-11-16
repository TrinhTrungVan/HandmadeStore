import {format} from 'date-fns'

import getSizes from '@/actions/get-sizes'
import SizeClient from './components/client'
import {SizeColumn} from './components/columns'

const SizesPage = async () => {
  const sizes = await getSizes()

  const formattedData: SizeColumn[] = sizes.map((item: any) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(new Date(item.createdAt), 'MMMM do, yyyy'),
  }))

  return (
    <div className="flex-1 p-8 pt-6">
      <SizeClient data={formattedData} />
    </div>
  )
}

export default SizesPage
