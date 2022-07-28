import { NavBar, List } from 'antd-mobile'

import styles from './index.scss'

const UserSetting = () => {
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
        <List.Item onClick={() => {}} extra="USD">
          Currency
        </List.Item>
        <List.Item onClick={() => {}} extra="English">
          Language
        </List.Item>
        <List.Item onClick={() => {}} extra="Dark">
          Theme
        </List.Item>
        <List.Item onClick={() => {}} extra="Fingerprint">
          Security
        </List.Item>
        <List.Item onClick={() => {}}>Notification</List.Item>
      </List>
      <List className={styles['list-help-item']}>
        <List.Item onClick={() => {}}>About</List.Item>
        <List.Item onClick={() => {}}>Help</List.Item>
      </List>
    </div>
  )
}

export default UserSetting
