import { onGet } from '@/store/request'

export const getAccountInfo = () => {
  return onGet('/account/info')
}
