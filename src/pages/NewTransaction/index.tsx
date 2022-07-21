import { NavBar, Input, Button } from 'antd-mobile'
import { useNavigate } from 'react-router'
import SelectList from '../Transaction/components/SelectList'
import { categoryTypes, walletTypes } from '@/constants/transaction'
import Attachment from './components/Attachment/index'
import BottomCard from './components/BottomCard/index'
import Repeat from './components/Repeat'
import styles from './index.scss'
import { useState } from 'react'

export default () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }

  const [money, setMoney] = useState('')

  const handleMoneyInput = (val: string) => {
    setMoney(val)
  }

  return (
    <div className={styles.wrapper}>
      <NavBar onBack={goBack} className={styles.nav}>
        Expense
      </NavBar>
      <div className={styles.alert}>How much?</div>
      <div className={styles.row}>
        <span className={styles.dollar}>$</span>
        <Input
          placeholder="0"
          className={styles.input}
          value={money}
          type="number"
          onChange={(v) => handleMoneyInput(v)}
        />
      </div>
      <BottomCard withIcon={false}>
        <SelectList
          size="large"
          options={categoryTypes}
          selectedWithBorder={true}
        ></SelectList>

        <div className={styles['desc-wrapper']}>
          <Input placeholder="Describe" className={styles.desc}></Input>
        </div>

        <SelectList options={walletTypes}></SelectList>
        <Attachment></Attachment>
        <Repeat />
        <Button className="btn-big">Continue</Button>
      </BottomCard>
    </div>
  )
}
