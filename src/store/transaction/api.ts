import { onGet } from '@/store/request'

// get all categories
export const getCategories = () => {
  return onGet('/categories')
}
