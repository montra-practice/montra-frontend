import { onPost } from '@/store/request'

export const signUpUser = <fieldsType>(data: fieldsType) => {
  return onPost('/user/register', data)
}

export const verifyPasscode = (code: string) => {
  return onPost('/user/verify', code)
}
