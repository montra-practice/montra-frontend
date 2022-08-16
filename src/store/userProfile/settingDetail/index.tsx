import { onGet, onPost } from '@/store/request'

export const getSetting = () => {
  return onGet('/userProfile/setting/info')
}
export const getSettingDetail = (params: any) => {
  return onGet('/userProfile/settingDetail/info', params)
}
export const updateSettingDetail = (params: any) => {
  return onPost('/userProfile/settingDetail/update', params)
}
