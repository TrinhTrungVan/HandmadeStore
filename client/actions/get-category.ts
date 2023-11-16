import categoryServices from '@/api/services/category-services'

const getCategory = async (id: string) => {
  try {
    const res = await categoryServices.getCategory(id)
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getCategory
