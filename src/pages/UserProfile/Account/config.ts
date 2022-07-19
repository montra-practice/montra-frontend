function getImgsPath(img: string, imgSuffix: string = 'png') {
  return require(`../../../assets/images/userProfile/account/${img}.${imgSuffix}`)
}
export const IMGS_MAP = new Map([
  ['chase', getImgsPath('user-profile-account_chase')],
  ['wallet', getImgsPath('user-profile-account_wallet')],
  ['citi', getImgsPath('user-profile-account_citi')],
  ['paypal', getImgsPath('user-profile-account_paypal')],
])

export function capitalizeFirstLetter(str: string) {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
