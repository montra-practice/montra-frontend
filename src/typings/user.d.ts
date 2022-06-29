declare interface IUser {
  name: string
  email: string
  password: string
}

declare interface IRequestUserSignUp extends IUser {
  agreePolicy: boolean
}
