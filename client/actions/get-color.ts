import colorServices from '@/api/services/color-services'

const getColor = async (id: string) => {
  try {
    const res = await colorServices.getColor(id)
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getColor
