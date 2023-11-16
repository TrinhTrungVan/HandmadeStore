import colorServices from '@/api/services/color-services'
import ColorForm from './components/color-form'
import getColor from '@/actions/get-color'

const ColorPage = async ({params}: {params: {colorId: string}}) => {
  let color: any
  if (params.colorId === 'new') {
    color = null
  } else {
    color = await getColor(params.colorId)
  }

  return (
    <div className="flex-1 p-8 pt-6">
      <ColorForm initialData={color} />
    </div>
  )
}

export default ColorPage
