function getImgsPath(img: string, imgSuffix: string = 'png') {
  return require(`../../../../assets/images/userProfile/${img}.${imgSuffix}`)
}
export const IMGS_MAP = new Map([
  ['account', getImgsPath('account_icon')],
  ['settings', getImgsPath('setting_icon')],
  ['exportData', getImgsPath('export-data_icon')],
  ['logout', getImgsPath('logout_icon')],
])

export const userFunctionsConfigList = [
  {
    title: 'Account',
    icon: IMGS_MAP.get('account'),
    path: '/user-profile/account',
  },
  {
    title: 'Settings',
    icon: IMGS_MAP.get('settings'),
    path: '/user-profile/settings',
  },
  {
    title: 'Export Data',
    icon: IMGS_MAP.get('exportData'),
    path: '/user-profile/export-data',
  },
  {
    title: 'Logout',
    icon: IMGS_MAP.get('logout'),
    path: '',
  },
]
