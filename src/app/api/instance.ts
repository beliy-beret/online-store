import { endpoints } from 'app/api/endpoints'
import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

const urlsSkipAuth = [endpoints.auth.login]

instance.interceptors.request.use(async (config) => {
  if (config.url && urlsSkipAuth.includes(config.url)) {
    return config
  }

  const accessToken = sessionStorage.getItem('token')

  if (accessToken) {
    const authorization = `Bearer ${accessToken}`
    config.headers.Authorization = authorization
  }

  return config
})
