import productServices from '@/api/services/product-services'

const getProduct = async (id: string) => {
  try {
    const res = await productServices.getProduct(id)
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getProduct
