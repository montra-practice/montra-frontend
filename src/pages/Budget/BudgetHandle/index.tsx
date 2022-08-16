import { useLocation } from 'react-router-dom'
import BudgetHandle, { IBudgetHandle } from './budget'
export default function Budget() {
  const { state } = useLocation()
  const budgetHandle = state as IBudgetHandle
  return (
    <BudgetHandle
      type={budgetHandle.type}
      data={budgetHandle.data}
    ></BudgetHandle>
  )
}
