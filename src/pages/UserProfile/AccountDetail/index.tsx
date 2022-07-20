import { useEffect } from 'react'

import { NavBar, Space, Toast } from 'antd-mobile'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import editImg from '@/assets/images/userProfile/edit_icon.png'
import { IMGS_MAP, capitalizeFirstLetter } from '../Account/config'
import { DETAIL_IMGS_MAP } from './config'
import * as accountDetailServices from '@/store/userProfile/accountDetail'

import styles from './index.scss'

type RecordItemProps = {
  date: string
  list: {
    type: string
    desc: string
    expenditure: number
    time: string
  }[]
}

const AccountDetail = () => {
  const { type } = useParams()
  const { data, run } = useRequest(accountDetailServices.getAccountDetail, {
    manual: true,
  })

  const handleBack = () => {
    window.history.back()
  }

  useEffect(() => {
    run({ type })
  }, [run])

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '24px' }}>
        <img src={editImg} alt="" style={{ width: 20, height: 20 }} />
      </Space>
    </div>
  )
  if (!type) {
    Toast.show('Parameter does not exist')
    window.history.back()
  }
  const resultData = data?.response?.data
  console.log(
    '🚀 ~ file: index.tsx ~ line 38 ~ AccountDetail ~ resultData',
    resultData,
  )
  return (
    <div className={styles['account-detail-container']}>
      <NavBar onBack={handleBack} style={{ '--height': '64px' }} right={right}>
        Detail account
      </NavBar>
      <div className={styles['detail-card']}>
        <img src={IMGS_MAP.get(resultData?.type)} alt="" />
        <span className={styles['pay-type']}>
          {capitalizeFirstLetter(resultData?.type)}
        </span>
        <span className={styles['total']}>${resultData?.total ?? '--'}</span>
      </div>
      {resultData?.list?.length > 0 &&
        resultData.list.map((item: RecordItemProps) => (
          <div className={styles['consumption-record-card']}>
            <div className={styles['consumption-date']}>{item?.date}</div>
            <div className={styles['consumption-list']}>
              {item?.list?.length > 0 &&
                item.list.map((childItem) => (
                  <div className={styles['consumption-item']}>
                    <img src={DETAIL_IMGS_MAP.get(childItem?.type)} alt="" />
                    <div className={styles['content']}>
                      <p className={styles['title']}>
                        {capitalizeFirstLetter(childItem?.type)}
                      </p>
                      <span className={styles['desc']}>{childItem?.desc}</span>
                    </div>
                    <div className={styles['others']}>
                      <p className={styles['sum']}>
                        -${childItem?.expenditure}
                      </p>
                      <span className={styles['time']}>{childItem?.time}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  )
}

export default AccountDetail