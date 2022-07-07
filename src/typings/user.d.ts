declare interface IUser {
  username: string
  email: string
  password: string
}

declare interface IRequestUserSignUp extends IUser {
  agreePolicy: boolean
}
