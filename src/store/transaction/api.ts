import { onGet, onPost } from '@/store/request'

// get all categories
export const getCategories = () => {
  return onGet('/categories')
}

// create transaction
export const createTransaction = () => {
  return onPost('/bills')
}

// get transaction detail
export const getTransDetail = (id: string) => {
  return onGet(`/bills/${id}`)
}

// get all transaction list
export const getTransactionList = (params: any) => {
  return onGet('/bills', params)
}

// upload Attachment
export const uploadAttachment = (file: any) => {
  return onPost('/bills/attachments', file)
}

// get attachment src
export const getAttachment = (id: string) => {
  return onGet(`bills/attachments/${id}`)
}
