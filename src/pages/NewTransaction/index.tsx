import { NavBar, Input, Button } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'
import { categoryTypes, walletTypes } from '@/constants/transaction'
import AmountInput from './components/AmountInput'
import SelectList from '../Transaction/components/SelectList'
import Attachment from './components/Attachment/index'
import BottomCard from './components/BottomCard/index'
import Repeat from './components/Repeat'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }

  const { pathname } = useLocation()
  const curType = pathname.split('/')[1]
  const title = curType[0].toUpperCase() + curType.substr(1)

  const [amount, setAmount] = useState('0')

  const handleAmountInput = (val: string) => {
    setAmount(val)
  }

  return (
    <div className={styles[curType]}>
      <NavBar onBack={goBack}>{title}</NavBar>
      <AmountInput
        amount={amount}
        handleAmount={handleAmountInput}
      ></AmountInput>
      <BottomCard withIcon={false}>
        <SelectList
          size="large"
          options={categoryTypes}
          selectedWithBorder={true}
        ></SelectList>

        <div className={styles['desc-wrapper']}>
          <Input placeholder="Describe"></Input>
        </div>

        <SelectList options={walletTypes}></SelectList>
        <Attachment></Attachment>
        <Repeat />
        <Button className="btn-big">Continue</Button>
      </BottomCard>
    </div>
  )
}
