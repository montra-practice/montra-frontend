import { NavBar, Button, Input } from 'antd-mobile'
import { useNavigate } from 'react-router'
import AmountInput from '../NewTransaction/components/AmountInput'
import BottomCard from '../NewTransaction/components/BottomCard'
import Attachment from '../NewTransaction/components/Attachment'
import TransferIcon from '@/assets/icons/transfer.png'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }

  const handleAmountInput = () => {}
  return (
    <div className={styles.wrapper}>
      <NavBar
        onBack={goBack}
        data-testid="transferNav"
        className="nav-bar-white"
      >
        Transfer
      </NavBar>
      <AmountInput amount="0" handleAmount={handleAmountInput}></AmountInput>
      <BottomCard withIcon={false}>
        <div className={styles.content}>
          <div className={styles.row}>
            <Input className={styles.from} placeholder="from"></Input>
            <img
              src={TransferIcon}
              alt="transfer icon"
              className={styles['transfer-icon']}
            ></img>
            <Input className={styles.to} placeholder="to"></Input>
          </div>
          <div className={styles['desc-wrapper']}>
            <Input placeholder="Describe"></Input>
          </div>
          <Attachment></Attachment>
        </div>
        <Button className="btn-big">Continue</Button>
      </BottomCard>
    </div>
  )
}
