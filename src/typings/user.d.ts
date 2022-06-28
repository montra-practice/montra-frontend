declare interface IUser {
  name: string
  email: string
}

declare interface IRequestUserSignUp extends IUser {
  agreePolicy: boolean
}
