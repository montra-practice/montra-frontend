// import Filter from '@/components/Filter'
import TransactionList from '@/components/TransactionList'
import { transactionList } from '@/utils/consts'

export default () => {
  return <TransactionList list={transactionList} />
}
