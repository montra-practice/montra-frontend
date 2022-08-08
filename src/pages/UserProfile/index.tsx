import { useEffect } from 'react'
import { Image } from 'antd-mobile'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import UserFunctions from './components/UserFunctions'
import * as userProfileServices from '@/store/userProfile/index'
import editImg from '@/assets/images/userProfile/edit_icon.png'

import styles from './index.scss'
import TabFooter from '@/components/TabFooter'
const classPrefix = 'user-profile'

const UserProfile = () => {
  const navigate = useNavigate()
  const { data, run } = useRequest(userProfileServices.getUserInfo, {
    manual: true,
  })
  useEffect(() => {
    document.title = 'User Profile'
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
          <span data-testid="nickname">{userInfo?.nickName}</span>
          <p data-testid="realName">{userInfo.realName}</p>
        </div>
        <div
          className={styles['action-box']}
          data-testid="edit-box"
          onClick={() => navigate('/user-profile/edit')}
        >
          <Image src={editImg} width={20} height={20} fit="cover" />
        </div>
      </div>
      <UserFunctions />
      <TabFooter />
    </div>
  )
}

export default UserProfile
