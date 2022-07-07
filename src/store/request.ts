import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const BASE_URL = '/api/v1'

const instance = axios.create({
  baseURL: BASE_URL,
})

export const onGet = (url: string, params?: {}, config?: AxiosRequestConfig) => {
  return request(url, 'GET', {
    ...config,
    params,
  })
}

export const onPost = (url: string, data?: {}, config?: AxiosRequestConfig) => {
  return request(url, 'POST', {
    ...config,
    data,
  })
}

export  const request = async (
  url: string,
  method: string,
  config?: AxiosRequestConfig,
  disableErrorHandler?: boolean,
) => {
  // TODO: GET TOKEN
  const token = ''
  try {
    const { data = {}, headers }: AxiosResponse<{}> = await instance(url, {
      headers: {
        'Content-Type': 'application/json',
        authorization: token
      },
      method,
      ...config,
    })
    return { response: data, headers }
  } catch (error: any) {
    if (!disableErrorHandler) {
      // TODO
      // 统一处理网络错误
      const { status, data } = error.response as AxiosResponse
      if (status === 401 || status === 403) {
        // TODO: Logout
        return
      } else {
        return Promise.reject((data || {}).errorMessage || error.message)
      }
    }
    return { error }
  }
}
