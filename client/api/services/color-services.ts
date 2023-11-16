import axiosClient from '../axiosClient'

export type ColorData = {
  name: string
  value: string
}

const colorServices = {
  getColors: () => {
    return axiosClient.get('/colors')
  },

  getColor: (id: string) => {
    return axiosClient.get(`/colors/${id}`)
  },

  createColor: (data: ColorData) => {
    return axiosClient.post('/colors', data)
  },

  updateColor: (id: string, data: ColorData) => {
    return axiosClient.patch(`/colors/${id}`, data)
  },

  deleteColor: (id: string) => {
    return axiosClient.delete(`/colors/${id}`)
  },
}

export default colorServices
