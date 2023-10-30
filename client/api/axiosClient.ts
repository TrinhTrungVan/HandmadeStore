import axios from 'axios'
import apiConfig from './apiConfig'

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
})

export default axiosClient
