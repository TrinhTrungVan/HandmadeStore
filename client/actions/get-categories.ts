import categoryServices from '@/api/services/category-services'

const getCategories = async () => {
  try {
    const res = await categoryServices.getCategories()
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getCategories
