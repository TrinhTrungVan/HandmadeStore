import {format} from 'date-fns'

import getColors from '@/actions/get-colors'
import ColorClient from './components/client'
import {ColorColumn} from './components/columns'

const ColorsPage = async () => {
  const colors = await getColors()

  const formattedData: ColorColumn[] = colors.map((item: any) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: format(new Date(item.createdAt), 'MMMM do, yyyy'),
  }))

  return (
    <div className="flex-1 p-8 pt-6">
      <ColorClient data={formattedData} />
    </div>
  )
}

export default ColorsPage
