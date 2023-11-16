import axiosClient from '../axiosClient'

export type SizeData = {
  name: string
  value: string
}

const sizeServices = {
  getSizes: () => {
    return axiosClient.get('/sizes')
  },

  getSize: (id: string) => {
    return axiosClient.get(`/sizes/${id}`)
  },

  createSize: (data: SizeData) => {
    return axiosClient.post('/sizes', data)
  },

  updateSize: (id: string, data: SizeData) => {
    return axiosClient.patch(`/sizes/${id}`, data)
  },

  deleteSize: (id: string) => {
    return axiosClient.delete(`/sizes/${id}`)
  },
}

export default sizeServices
