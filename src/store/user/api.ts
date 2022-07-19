import { onPost } from '@/store/request'

export const register = (data: IUser) => {
  return onPost('/user/register', data)
}

export const verifyPasscode = (verifyCode: string) => {
  return onPost('/user/verify', { verifyCode })
}

export const login = (data: Partial<IUser>) => {
  return onPost('/user/login', data)
}

export const forgotPassword = (email: string) => {
  return onPost('/user/forgot-password', email)
}
