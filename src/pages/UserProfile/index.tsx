import { useEffect } from 'react'
import { Image } from 'antd-mobile'
import { useRequest } from 'ahooks'
import UserFunctions from './components/UserFunctions'
import * as userProfileServices from '@/store/userProfile/index'
import editImg from '@/assets/images/userProfile/edit_icon.png'

import styles from './index.scss'
const classPrefix = 'user-profile'

const UserProfile = () => {
  const { data, run } = useRequest(userProfileServices.getUserInfo)
  useEffect(() => {
    run()
  }, [run])

  const userInfo = data?.response?.data || {}
  return (
    <div className={styles[`${classPrefix}-container`]}>
      <div className={styles[`${classPrefix}-box`]}>
        <div className={styles['avatar-box']}>
          <Image
            src={userInfo?.avatarUrl}
            width={80}
            height={80}
            fit="cover"
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div className={styles['user-info']}>
          <span>{userInfo?.nickname}</span>
          <p>{userInfo.realName}</p>
        </div>
        <div className={styles['action-box']}>
          <Image src={editImg} width={20} height={20} fit="cover" />
        </div>
      </div>
      <UserFunctions />
    </div>
  )
}

export default UserProfile
