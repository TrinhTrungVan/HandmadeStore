import axiosClient from '../axiosClient'

export type UserLoginData = {
  username: string
  password: string
}

export type UserRegisterData = {
  username: string
  password: string
  email: string
  phone: string
}

export type UserUpdateData = {
  username: string
  password: string
  email: string
  phone: string
  imageUrl: string
}

const userServices = {
  login: (data: UserLoginData) => {
    return axiosClient.post('/auth/login', data)
  },
  register: (data: UserRegisterData) =>
    axiosClient.post('/auth/register', data),
  updateProfile: (id: string, data: UserUpdateData) =>
    axiosClient.patch(`/users/${id}`, data),
}

export default userServices
