import productServices, {ProductQuery} from '@/api/services/product-services'

const getProducts = async (query: ProductQuery) => {
  try {
    const res = await productServices.getProducts(query)
    return res.data.result
  } catch (error: any) {
    throw new Error(error)
  }
}

export default getProducts
