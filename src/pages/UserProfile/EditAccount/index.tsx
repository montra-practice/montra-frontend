import React, { useState } from 'react'
import { Button, Input, NavBar, Space, SafeArea } from 'antd-mobile'
import { DeleteOutline } from 'antd-mobile-icons'
import styles from './index.scss'

const EditAccount = () => {
  const [accountName, setAccountName] = useState<string | undefined>()
  const [accountType, setAccountType] = useState<string | undefined>()
  const handleBack = () => {
    window.history.back()
  }

  const right = (
    <div>
      <Space style={{ '--gap': '24px' }}>
        <DeleteOutline fontSize={20} />
      </Space>
    </div>
  )
  return (
    <div className={styles['account-edit-container']}>
      <NavBar
        onBack={handleBack}
        style={{ '--height': '64px', color: '#fff' }}
        right={right}
      >
        Detail account
      </NavBar>
      <div className={styles['edit-content-wrapper']}>
        <div className={styles['balance-card']}>
          <span>Balance</span>
          <p>$2400</p>
        </div>
        <div className={styles['content']}>
          <Input
            placeholder="Name"
            value={accountName}
            onChange={(val) => {
              setAccountName(val)
            }}
          />
          <Input
            placeholder="Account Type"
            value={accountType}
            onChange={(val) => {
              setAccountType(val)
            }}
          />
          <div className={styles['btn']}>
            <Button>Continue</Button>
          </div>
        </div>
      </div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  )
}

export default EditAccount
