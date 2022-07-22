import { useEffect } from 'react'
import { NavBar, Button } from 'antd-mobile'
import { useRequest } from 'ahooks'
import { useNavigate } from 'react-router-dom'
import * as userAccountServices from '@/store/userProfile/account'
import { IMGS_MAP, capitalizeFirstLetter } from './config'
import styles from './index.scss'

const Account = () => {
  const navigate = useNavigate()
  const { data, run } = useRequest(userAccountServices.getAccountInfo, {
    manual: true,
  })

  const handleBack = () => {
    console.log('onback')
    window.history.back()
  }

  const handleToPageDetail = (payment: string) => {
    if (!payment) return
    navigate(`/user-profile/account/detail/${payment}`)
  }
  useEffect(() => {
    document.title = 'Account'
    run()
  }, [run])

  console.log(data)
  const accountInfo = data?.response?.data || {}
  return (
    <div className={styles['account-container']}>
      <NavBar onBack={handleBack} style={{ '--height': '64px' }}>
        Account
      </NavBar>
      <div className={styles['account-balance-warpper']}>
        <span className={styles['text']}>Account Balance</span>
        <p className={styles['sum']}>${accountInfo?.account ?? '--'}</p>
      </div>
      <div className={styles['payment-list-wrapper']}>
        {accountInfo?.payList?.length > 0 &&
          accountInfo.payList.map(
            ({ payment, sum }: { payment: string; sum: number }) => (
              <div
                key={payment}
                className={styles['item-box']}
                onClick={() => handleToPageDetail(payment)}
              >
                <div className={styles['desc-box']}>
                  <img src={IMGS_MAP.get(payment)} alt="" />
                  <span>{capitalizeFirstLetter(payment)}</span>
                </div>
                <span className={styles['sum']}>${sum ?? '--'}</span>
              </div>
            ),
          )}
      </div>
      <div className={styles['add-btn-box']}>
        <Button className={styles['add-btn']}>+ Add new wallet</Button>
      </div>
    </div>
  )
}

export default Account
