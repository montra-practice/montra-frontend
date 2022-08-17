import { NavBar, Input, Button } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'
import {
  categoryExpense,
  categoryIncome,
  walletTypes,
  repeatObj,
} from '@/constants/transaction'
import AmountInput from '@/components/AmountInput'
import Select from '@/components/Select'
import Attachment from '@/components/Attachment'
import BottomCard from '@/components/BottomCard'
import Repeat from './components/Repeat'
import DialogShow from '@/components/DialogShow'
import { goBack } from '@/utils/common'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const transType = pathname.split('/')[1]
  const title = transType[0].toUpperCase() + transType.substr(1)

  const [amount, setAmount] = useState('')
  const [cateType, setCateType] = useState('')
  const [desc, setDesc] = useState('')
  const [walletType, setWalletType] = useState('')

  const handleAmountInput = (val: string) => {
    console.log('amount', val)
    setAmount(val)
  }

  const handleCateType = (item: any) => {
    setCateType(item.value)
  }

  const handleDesc = (val: string) => {
    setDesc(val)
  }

  const handleWalletType = (item: any) => {
    setWalletType(item.value)
  }

  const handleAttachData = (data: object) => {
    console.log('attach:', data)
  }

  const handleRepeatData = (data: object) => {
    console.log('repeat:', data)
  }

  const handleSubmit = () => {
    DialogShow('Transaction has been successfully removed', () => {
      navigate('/transaction')
    })
  }

  return (
    <div className={styles[transType]}>
      <NavBar onBack={goBack} className="nav-bar-white">
        {title}
      </NavBar>
      <AmountInput
        amount={amount}
        handleAmount={handleAmountInput}
        className={styles.amount}
      ></AmountInput>
      <BottomCard withIcon={false}>
        <Select
          options={transType === 'income' ? categoryIncome : categoryExpense}
          selectedWithBorder={true}
          defaultValue={cateType}
          onSelect={handleCateType}
        ></Select>

        <div className={styles['desc-wrapper']}>
          <Input
            placeholder="Describe"
            onChange={handleDesc}
            defaultValue={desc}
          />
        </div>

        <Select
          options={walletTypes}
          defaultValue={walletType}
          onSelect={handleWalletType}
        ></Select>
        <Attachment onAttach={handleAttachData}></Attachment>
        <Repeat {...repeatObj} onRepeat={handleRepeatData} />
        <Button className="btn-big" onClick={handleSubmit}>
          Continue
        </Button>
      </BottomCard>
    </div>
  )
}
