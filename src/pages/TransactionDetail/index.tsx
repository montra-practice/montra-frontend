import { Button, NavBar } from 'antd-mobile'
import RemoveIcon from '@/assets/icons/remove.png'
import { useNavigate } from 'react-router'
import RemoveAlert from '@/components/RemoveAlert'
import DialogShow from '@/components/DialogShow'
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
    DialogShow('Remove successfully')
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
      <NavBar onBack={goBack} className="nav-bar-white" right={navRight}>
        Transaction Detail
      </NavBar>

      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div>
        <title></title>
        <div></div>
      </div>
      <div>
        <title></title>
        <div></div>
      </div>
      <Button className="btn-big">Edit</Button>
      <RemoveAlert
        visible={removeVisible}
        onConfirm={handleRemoveConfirm}
        onCancel={handleRemoveVisible}
      ></RemoveAlert>
    </div>
  )
}
