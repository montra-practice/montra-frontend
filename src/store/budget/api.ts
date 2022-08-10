import { onPost, onGet } from '@/store/request'

export const getBudgetList = () => {
  return onGet('/budget/list')
}