import { Button, NavBar } from 'antd-mobile'
import RemoveIcon from '@/assets/icons/remove.png'
import { useNavigate } from 'react-router'
import RemoveAlert from '@/components/RemoveAlert'
import DialogShow from '@/components/DialogShow'
import ControlMoneyImg from '@/assets/images/control_money.png'
import styles from './index.scss'
import { useState } from 'react'

export default () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }

  const [removeVisible, setRemoveVisible] = useState(false)
  const handleRemoveVisible = () => {
    setRemoveVisible(!removeVisible)
  }
  const handleRemoveConfirm = () => {
    handleRemoveVisible()
    DialogShow('Remove successfully', () => {
      navigate('/transaction')
    })
  }

  const navRight = (
    <img
      src={RemoveIcon}
      alt="remove icon"
      onClick={handleRemoveVisible}
      className={styles.delete}
    />
  )
  return (
    <div className={styles.expense}>
      <div className={styles.nav}>
        <NavBar onBack={goBack} className="nav-bar-white" right={navRight}>
          Transaction Detail
        </NavBar>
      </div>
      <div className={styles.top}>
        <div className={styles.amount}>$120</div>
        <div className={styles['type-desc']}>Buy some grocery</div>
        <div className={styles.create}>Saturday 4 June 2021 16:20</div>
      </div>

      <div className={styles['type-card']}>
        <div className={styles.item}>
          <div className={styles.type}>Type</div>
          <div className={styles['type-name']}>Expense</div>
        </div>
        <div className={styles.item}>
          <div className={styles.type}>Category</div>
          <div className={styles['type-name']}>Shopping</div>
        </div>
        <div className={styles.item}>
          <div className={styles.type}>Wallet</div>
          <div className={styles['type-name']}>Wallet</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.line}></div>
        <div>
          <span className={styles.title}>Description</span>
          <p className={styles.desc}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div>
          <span className={styles.title}>Attachment</span>
          <img
            src={ControlMoneyImg}
            alt="attachment img"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <Button className="btn-big">Edit</Button>
      </div>

      <RemoveAlert
        visible={removeVisible}
        onConfirm={handleRemoveConfirm}
        onCancel={handleRemoveVisible}
      ></RemoveAlert>
    </div>
  )
}
