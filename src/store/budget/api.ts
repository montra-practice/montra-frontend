import { onPost, onGet } from '@/store/request'

export const getBudgetList = () => {
  return onGet('/budget/list')
}

export const deleteBudget = (budgetId: number) => {
  return onPost('/budget/delete', { budgetId })
}
