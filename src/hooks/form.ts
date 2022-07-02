import { onPost } from '@/store/request'

export const useSubmitForm = <fieldsType>(data: fieldsType[], url: string) => {
  return onPost(url, data)
}
