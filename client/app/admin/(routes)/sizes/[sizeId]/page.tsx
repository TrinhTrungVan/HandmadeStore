import getSize from '@/actions/get-size'
import SizeForm from './components/size-form'

const SizePage = async ({params}: {params: {sizeId: string}}) => {
  let size: any
  if (params.sizeId === 'new') {
    size = null
  } else {
    size = await getSize(params.sizeId)
  }
  return (
    <div className="flex-1 p-8 pt-6">
      <SizeForm initialData={size} />
    </div>
  )
}

export default SizePage
