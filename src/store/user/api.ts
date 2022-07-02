import { onPost } from '@/store/request'

export const signUpUser = <fieldsType>(data: fieldsType) => {
  return onPost('/user', data)
}
