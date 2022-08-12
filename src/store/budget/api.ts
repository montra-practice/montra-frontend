import { onPost, onGet } from '@/store/request'

export const getBudgetList = () => {
  return onGet('/budget/list')
}

export const deleteBudget = (budgetId: number) => {
  return onPost('/budget/delete', { budgetId })
}
export const editBudget = (budget: Partial<IBudget>) => {
  return onPost('/budget/update', budget)
}
export const addBudget = (budget: Partial<IBudget>) => {
  return onPost('/budget/add', budget)
}
