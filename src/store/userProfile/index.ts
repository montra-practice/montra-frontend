import { onGet } from '@/store/request'

export const getUserInfo = () => {
  return onGet('/userInfo')
}
