import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Toast } from 'antd-mobile'
import Token from '@/utils/token'

const HOST =
  process.env.NODE_ENV === 'production' ? 'http://122.112.234.17:3301' : ''
export const BASE_URL = '/api/v1'

const instance = axios.create({
  baseURL: HOST + BASE_URL,
})

export const onGet = (
  url: string,
  params?: {},
  config?: AxiosRequestConfig,
) => {
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

export const request = async (
  url: string,
  method: string,
  config?: AxiosRequestConfig,
  disableErrorHandler?: boolean,
) => {
  Toast.show({
    icon: 'loading',
    duration: 0,
    content: '加载中…',
  })
  try {
    const { getToken } = Token('token')
    const { data = {}, headers }: AxiosResponse<any> = await instance(url, {
      headers: {
        'Content-Type': 'application/json',
        authorization: getToken(),
      },
      method,
      ...config,
    })
    Toast.clear()

    return { response: data, headers }
  } catch (error: any) {
    Toast.clear()
    if (!disableErrorHandler) {
      // TODO
      // 统一处理网络错误
      const { status, data } = error.response as AxiosResponse
      if (status === 401 || status === 403) {
        // TODO: Logout
        return
      } else {
        const errorMessage = (data || {}).msg || error.message
        Toast.show({
          icon: 'fail',
          content: errorMessage,
        })
        return Promise.reject(errorMessage)
      }
    }
    return { error }
  }
}
