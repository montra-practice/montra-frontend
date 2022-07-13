// import Filter from '@/components/Filter'
import TransactionList from './components/TransactionList'
import { transactionList } from '@/constants/transaction'

export default () => {
  return <TransactionList list={transactionList} />
}
