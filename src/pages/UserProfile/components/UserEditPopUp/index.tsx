import { FC, useState, useMemo } from 'react'
import { NavBar, Popup, Button, Input } from 'antd-mobile'
import styles from './index.scss'
type UserEditPopUpProps = {
  visible: boolean
  title: string
  filedVal: string | undefined
  onClose: () => void
  onSave: () => void
}

const UserEditPopUp: FC<UserEditPopUpProps> = ({
  visible,
  title,
  filedVal,
  onClose,
  onSave,
}) => {
  const [value, setValue] = useState(filedVal)

  const handleChange = (val: string) => {
    setValue(val)
  }

  const hasValChange = useMemo(() => value === filedVal, [filedVal, value])
  const right = (
    <Button
      disabled={hasValChange}
      color="primary"
      size="small"
      onClick={onSave}
    >
      done
    </Button>
  )
  return (
    <Popup
      visible={visible}
      onMaskClick={onClose}
      position="bottom"
      className={styles['user-edit-popup-container']}
      bodyStyle={{ height: '100vh', backgroundColor: '#efefef' }}
    >
      {
        <div>
          <NavBar
            backArrow={<span style={{ fontSize: 16 }}>cancel</span>}
            onBack={onClose}
            right={right}
            style={{ '--height': '64px', backgroundColor: '#efefef' }}
          >
            {title}
          </NavBar>
          <Input
            clearable
            defaultValue={value}
            onChange={handleChange}
            onlyShowClearWhenFocus={false}
          />
        </div>
      }
    </Popup>
  )
}

export default UserEditPopUp
