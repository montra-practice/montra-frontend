import { NavBar, Button, Input } from 'antd-mobile'
import { useNavigate } from 'react-router'
import AmountInput from '../../components/AmountInput'
import BottomCard from '@/components/BottomCard'
import Attachment from '@/components/Attachment'
import TransferIcon from '@/assets/icons/transfer.png'
import styles from './index.scss'
import { useState } from 'react'
import DialogShow from '@/components/DialogShow'
import { goBack } from '@/utils/common'

export default () => {
  const navigate = useNavigate()

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const handleAmountInput = () => {}

  const handleFrom = (val: string) => {
    setFrom(val)
  }
  const handleTo = (val: string) => {
    setTo(val)
  }
  const handleRotate = () => {
    setFrom(to)
    setTo(from)
  }

  const handleSubmit = () => {
    DialogShow('Create Success', () => {
      navigate('/transaction')
    })
  }

  return (
    <div className={styles.wrapper}>
      <NavBar
        onBack={goBack}
        data-testid="transferNav"
        className="nav-bar-white"
      >
        Transfer
      </NavBar>
      <AmountInput
        amount="0"
        handleAmount={handleAmountInput}
        className={styles.amount}
      ></AmountInput>
      <BottomCard withIcon={false}>
        <div className={styles.content}>
          <div className={styles.row}>
            <Input
              className={styles.from}
              placeholder="from"
              value={from}
              onChange={handleFrom}
            />
            <img
              src={TransferIcon}
              alt="transfer icon"
              className={styles['transfer-icon']}
              onClick={handleRotate}
            />
            <Input
              className={styles.to}
              placeholder="to"
              value={to}
              onChange={handleTo}
            />
          </div>
          <div className={styles['desc-wrapper']}>
            <Input placeholder="Describe" />
          </div>
          <Attachment></Attachment>
        </div>
        <Button className="btn-big" onClick={handleSubmit}>
          Continue
        </Button>
      </BottomCard>
    </div>
  )
}
