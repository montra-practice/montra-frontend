import { useEffect, useState } from 'react'
import { List, NavBar, Image, Toast } from 'antd-mobile'
import { useRequest } from 'ahooks'
import UserEditPopUp from '../components/UserEditPopUp'
import * as userProfileServices from '@/store/userProfile/index'
// import styles from './index.scss'

const EditUserInfo = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [filedVal, setFildVal] = useState<string | undefined>(undefined)
  const { data, run } = useRequest(userProfileServices.getUserInfo, {
    manual: true,
  })

  const handleOpenEditModal = (title: string, val: string) => {
    setTitle(title)
    setVisible(true)
    setFildVal(val)
  }

  useEffect(() => {
    document.title = 'User Profile'
    run()
  }, [run])

  const userInfo = data?.response?.data || {}
  const userEditPopUpProps = {
    visible,
    title,
    filedVal,
    onClose: () => setVisible(false),
    onSave: () => Toast.show('The interface is not open'),
  }
  return (
    <div>
      <NavBar
        onBack={() => {
          window.history.back()
        }}
        style={{ '--height': '64px' }}
      >
        My Profile
      </NavBar>
      <List>
        <List.Item
          onClick={() => {}}
          extra={
            <Image
              src={userInfo?.avatarUrl}
              width={52}
              height={52}
              fit="cover"
              style={{ borderRadius: '50%', margin: 8 }}
            />
          }
        >
          Profile Photo
        </List.Item>
        <List.Item
          onClick={() => handleOpenEditModal('Name', userInfo?.realName)}
          extra={userInfo?.realName}
        >
          Name
        </List.Item>
        <List.Item
          onClick={() => handleOpenEditModal('User Name', userInfo?.nickName)}
          extra={userInfo?.nickName}
        >
          User Name
        </List.Item>
      </List>
      {visible && <UserEditPopUp {...userEditPopUpProps} />}
    </div>
  )
}

export default EditUserInfo
