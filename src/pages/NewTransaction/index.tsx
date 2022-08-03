import { NavBar, Input, Button } from 'antd-mobile'
import { useNavigate, useLocation } from 'react-router'
import { useState } from 'react'
import { categoryTypes, walletTypes, repeatObj } from '@/constants/transaction'
import AmountInput from '@/components/AmountInput'
import Select from '@/components/Select'
import Attachment from '@/components/Attachment'
import BottomCard from '@/components/BottomCard'
import Repeat from './components/Repeat'
import DialogShow from '@/components/DialogShow'
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
  const [cateType, setCateType] = useState('')
  const [desc, setDesc] = useState('')
  const [walletType, setWalletType] = useState('')

  const handleAmountInput = (val: string) => {
    setAmount(val)
  }

  const handleCateType = (item: any) => {
    setCateType(item.value)
  }

  const handleDesc = (e: any) => {
    setDesc(e.target.value)
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
          options={categoryTypes}
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
