import React, { useState, useMemo } from 'react'
import {
  Button,
  Input,
  NavBar,
  Space,
  Picker,
  Grid,
  Image,
  SafeArea,
} from 'antd-mobile'
import { DeleteOutline, DownOutline } from 'antd-mobile-icons'
import { useLocation } from 'react-router-dom'
import classnames from 'classnames'
import { basicColumns, bankTypeList } from './constant'
import styles from './index.scss'

const AccountEdit = () => {
  const [pickerVisible, setPickerVisible] = useState<boolean>(false)
  const [selectedBankType, setSelectedBankType] = useState('')
  const [pickerVal, setPickerVal] = useState<string | undefined>(undefined)
  const [accountName, setAccountName] = useState<string | undefined>()

  let location = useLocation()
  const isEditPage = useMemo(
    () => location.pathname === '/user-profile/account/edit',
    [location.pathname],
  )

  const handleBack = () => {
    window.history.back()
  }

  const handleShowPick = () => {
    setPickerVisible(true)
  }

  const handleGridItemClick = (type: string) => () => {
    setSelectedBankType(type !== selectedBankType ? type : '')
  }

  const handleSubmit = () => {
    console.log({
      accountName,
      pickerVal,
      selectedBankType,
    })
  }

  const right = isEditPage ? (
    <div>
      <Space style={{ '--gap': '24px' }}>
        <DeleteOutline fontSize={20} />
      </Space>
    </div>
  ) : null

  return (
    <div className={styles['account-edit-container']}>
      <NavBar
        onBack={handleBack}
        style={{ '--height': '64px', color: '#fff' }}
        right={right}
      >
        {isEditPage ? 'Edit account' : 'Add new account'}
      </NavBar>
      <div className={styles['edit-content-wrapper']}>
        <div className={styles['balance-card']}>
          <span>Balance</span>
          <p data-testid="balance value">${isEditPage ? 2400 : '0.00'}</p>
        </div>
        <div className={styles['content']}>
          <Input
            placeholder="Name"
            value={accountName}
            onChange={(val) => {
              setAccountName(val)
            }}
          />
          <div
            className={styles['account-type-picker-box']}
            onClick={handleShowPick}
            data-testid="show-picker"
          >
            <Input placeholder="Account Type" value={pickerVal} readOnly />
            <DownOutline
              className={styles['downout-icon']}
              fontSize={18}
              color="#91919F"
            />
            <Picker
              data-testid="picker-element"
              columns={basicColumns}
              visible={pickerVisible}
              onClose={() => {
                setPickerVisible(false)
              }}
              cancelText="cancel"
              confirmText="confirm"
              value={pickerVal ? [pickerVal] : undefined}
              onConfirm={(v) => {
                console.log('v', v[0])

                setPickerVal(v[0] || undefined)
              }}
            />
          </div>
          {pickerVal === 'bank' && (
            <div className={styles['bank-grid']} data-testid="bank-box">
              <h3>Bank</h3>
              <div className={styles['bank-grid-content']}>
                <Grid columns={4} gap={8}>
                  {bankTypeList.map(({ name, key, imgPath }) => (
                    <Grid.Item
                      key={key}
                      onClick={handleGridItemClick(name)}
                      className={classnames(styles['grid-item'], {
                        [styles['selected-grid-item']]:
                          name === selectedBankType,
                      })}
                    >
                      <Image src={imgPath} />
                    </Grid.Item>
                  ))}
                </Grid>
              </div>
            </div>
          )}
          <div className={styles['btn']}>
            <Button onClick={handleSubmit}>Continue</Button>
          </div>
        </div>
      </div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </div>
    </div>
  )
}

export default AccountEdit
