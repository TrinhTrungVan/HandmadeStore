import sizeServices from '@/api/services/size-services'

const getSizes = async () => {
  try {
    const res = await sizeServices.getSizes()
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getSizes
