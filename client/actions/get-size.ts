import sizeServices from '@/api/services/size-services'

const getSize = async (id: string) => {
  try {
    const res = await sizeServices.getSize(id)
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getSize
