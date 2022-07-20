import { NavBar, Input } from 'antd-mobile'
import { useNavigate } from 'react-router'
import SelectList from '../Transaction/components/SelectList'
import { categoryTypes, walletTypes } from '@/constants/transaction'
import Attachment from './components/Attachment/index'
import BottomCard from './components/BottomCard/index'
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

  const hideAttach = () => {}
  return (
    <div className={styles.wrapper}>
      <NavBar onBack={goBack}>Expense</NavBar>
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
          long={true}
          options={categoryTypes}
          selectedWithBorder={true}
          className={styles['margin-bottom']}
        ></SelectList>

        <div className={`${styles['desc-wrapper']} ${styles['margin-bottom']}`}>
          <Input placeholder="Describe" className={styles.desc}></Input>
        </div>

        <SelectList
          options={walletTypes}
          className={styles['margin-bottom']}
        ></SelectList>
        <Attachment visible={false} hideAttach={hideAttach}></Attachment>
      </BottomCard>
    </div>
  )
}
