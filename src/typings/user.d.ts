declare interface IUser {
  username: string
  email: string
  password: string
}

declare interface IResetPassword {
  newPassword: string
  repeatPassword: string
}
