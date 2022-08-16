import { useEffect } from 'react'
import { NavBar, List, Toast } from 'antd-mobile'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import selectImg from '@/assets/images/userProfile/selected_icon.png'
import { SETTING_LIST } from './constant'
import {
  getSettingDetail,
  updateSettingDetail,
} from '@/store/userProfile/settingDetail'

import styles from './index.scss'

const SettingDetail = () => {
  const { type } = useParams()
  const { data, run } = useRequest(getSettingDetail, {
    manual: true,
  })
  const list = type ? SETTING_LIST.get(type) : []

  const handleChangeItem = (value: string) => {
    updateSettingDetail({ type, value }).then((res) => {
      const { response } = res || {}
      if (response.data === 'success') {
        Toast.show({
          icon: 'success',
          content: 'success...',
          afterClose: () => {
            window.history.back()
          },
        })
      } else {
        Toast.show({
          icon: 'fail',
          content: 'fail...',
        })
      }
      console.log(res)
    })
  }
  useEffect(() => {
    run({ type })
  }, [])

  const settingInfo = data?.response?.data || {}

  const selectIcon = (
    <img className={styles['select-img']} src={selectImg} alt="" />
  )

  return (
    <div className={styles['setting-detail-container']}>
      <NavBar
        onBack={() => window.history.back()}
        style={{
          '--height': '64px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
        }}
      >
        {type}
      </NavBar>
      {list?.map((item) => (
        <List.Item
          className={styles['list-item']}
          arrow={item.value === settingInfo.value ? selectIcon : null}
          key={item.value}
          onClick={() => handleChangeItem(item.value)}
        >
          {item.key}
        </List.Item>
      ))}
    </div>
  )
}

export default SettingDetail
