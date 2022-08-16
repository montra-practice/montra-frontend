import { useEffect } from 'react'
import { NavBar, List } from 'antd-mobile'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'
import { getSetting } from '@/store/userProfile/settingDetail'

const UserSetting = () => {
  const navigate = useNavigate()
  const { data, run } = useRequest(getSetting, {
    manual: true,
  })
  console.log('🚀 ~ file: index.tsx ~ line 13 ~ UserSetting ~ data', data)
  const handleToSettingDetail = (type: string) => () => {
    if (type) navigate(`/user-profile/settings/detail/${type}`)
  }
  useEffect(() => {
    run()
  }, [])

  const settingData = data?.response?.data || {}
  return (
    <div className={styles['user-setting-container']}>
      <NavBar
        onBack={() => window.history.back()}
        style={{
          '--height': '64px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
        }}
      >
        Settings
      </NavBar>
      <List className={styles['list-funtions-item']}>
        <List.Item
          onClick={handleToSettingDetail('Currency')}
          extra={settingData['Currency']}
        >
          Currency
        </List.Item>
        <List.Item
          onClick={handleToSettingDetail('Language')}
          extra={settingData['Language']}
        >
          Language
        </List.Item>
        <List.Item
          onClick={handleToSettingDetail('Theme')}
          extra={settingData['Theme']}
        >
          Theme
        </List.Item>
        <List.Item
          onClick={handleToSettingDetail('Security')}
          extra={settingData['Security']}
        >
          Security
        </List.Item>
        <List.Item onClick={handleToSettingDetail('Notification')}>
          Notification
        </List.Item>
      </List>
      <List className={styles['list-help-item']}>
        <List.Item onClick={handleToSettingDetail('About')}>About</List.Item>
        <List.Item onClick={handleToSettingDetail('Help')}>Help</List.Item>
      </List>
    </div>
  )
}

export default UserSetting
