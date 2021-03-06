import { NavBar, Input, Button } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'
import { categoryTypes, walletTypes, repeatObj } from '@/constants/transaction'
import AmountInput from '@/components/AmountInput'
import Select from '@/components/Select'
import Attachment from '@/components/Attachment'
import BottomCard from '@/components/BottomCard'
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

  const handleAttachData = (data: object) => {
    console.log(data)
  }

  const handleRepeatData = (data: object) => {
    console.log(data)
  }

  return (
    <div className={styles[curType]}>
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
          size="large"
          options={categoryTypes}
          selectedWithBorder={true}
        ></Select>

        <div className={styles['desc-wrapper']}>
          <Input placeholder="Describe" />
        </div>

        <Select options={walletTypes}></Select>
        <Attachment onAttach={handleAttachData}></Attachment>
        <Repeat {...repeatObj} onRepeat={handleRepeatData} />
        <Button className="btn-big">Continue</Button>
      </BottomCard>
    </div>
  )
}
