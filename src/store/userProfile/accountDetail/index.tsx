import { onGet } from '@/store/request'

export const getAccountDetail = (params: any) => {
  return onGet('/account/detail', params)
}
