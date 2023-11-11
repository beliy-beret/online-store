import { endpoints } from 'app/api/endpoints'
import { instance } from 'app/api/instance'
import { AxiosPromise } from 'axios'

export type LoginData = {
  username: string
  password: string
}

export type LoginResponseType = {
  token: string
}

export const authApi = {
  login: async (loginData: LoginData): AxiosPromise<LoginResponseType> => {
    return await instance.post<LoginResponseType>(
      endpoints.auth.login,
      loginData,
    )
  },
}
