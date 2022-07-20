function getImgsPath(img: string, imgSuffix: string = 'png') {
  return require(`../../../assets/images/userProfile/accountDetail/${img}.${imgSuffix}`)
}
export const DETAIL_IMGS_MAP = new Map([
  ['shopping', getImgsPath('shopping_icon')],
  ['subscription', getImgsPath('subscription_icon')],
  ['food', getImgsPath('food_icon')],
  ['transportation', getImgsPath('transportation_icon')],
])
