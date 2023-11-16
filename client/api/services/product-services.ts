import qs from 'query-string'
import axiosClient from '../axiosClient'

export type ProductQuery = {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
  sortBy?: string
  name?: string
  page?: number
}

export type ProductData = {
  name: string
  description: string
  images: string[]
  price: number
  inStock: number
  categoryId: string
  colorId: string
  sizeId: string
  isFeatured?: boolean
  isArchived?: boolean
}

const productServices = {
  getProducts: (query: ProductQuery) => {
    const url = qs.stringifyUrl(
      {
        url: '/products',
        query: query,
      },
      {
        skipNull: true,
      },
    )

    return axiosClient.get(url)
  },

  getProduct: (id: string) => {
    return axiosClient.get(`/products/${id}`)
  },

  createProduct: (data: ProductData) => {
    return axiosClient.post('/products', data)
  },

  updateProduct: (id: string, data: ProductData) => {
    return axiosClient.patch(`/products/${id}`, data)
  },

  deleteProduct: (id: string) => {
    return axiosClient.delete(`/products/${id}`)
  },
}

export default productServices
