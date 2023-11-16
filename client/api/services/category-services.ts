import axiosClient from '../axiosClient'

export type CategoryData = {
  name: string
}

const categoryServices = {
  getCategories: () => {
    return axiosClient.get('/categories')
  },

  getCategory: (id: string) => {
    return axiosClient.get(`/categories/${id}`)
  },

  createCategory: (data: CategoryData) => {
    return axiosClient.post('/categories', data)
  },

  updateCategory: (id: string, data: CategoryData) => {
    return axiosClient.patch(`/categories/${id}`, data)
  },

  deleteCategory: (id: string) => {
    return axiosClient.delete(`/categories/${id}`)
  },
}

export default categoryServices
