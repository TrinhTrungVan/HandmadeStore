import colorServices from '@/api/services/color-services'

const getColors = async () => {
  try {
    const res = await colorServices.getColors()
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getColors
