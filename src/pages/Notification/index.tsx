import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'
import styles from './index.scss'
import NotificationDetail from './NotificationDetail'
import { MoreOutline } from 'antd-mobile-icons'
import { useEffect, useState } from 'react'

function Notification() {
  const navigate = useNavigate()
  const [tabStatus, setTabStatus] = useState(false)
  const [list, setList] = useState([] as INotification[])
  const goBack = () => {
    navigate('/home')
  }

  useEffect(() => {
    const list = [
      {
        title: 'Shopping budget has exceeds the limit of 20000',
        description: 'Your Shopping budget has exceeds the limit of 20000',
        time: '19.30',
      },
      {
        title: 'Shopping budget has exceeds the limit of 20000',
        description: 'Your Shopping budget has exceeds the limit of 20000',
        time: '19.30',
      },
    ]
    setList(list)
    document.title = 'Notification'
  }, [])

  const showActionTab = (flag?: boolean) => () => {
    if (flag === true || flag === false) {
      setTabStatus(flag)
      return
    }
    setTabStatus(!tabStatus)
  }

  const markAllRead = () => {
    showActionTab(false)()
  }

  const removeAll = () => {
    showActionTab(false)()
  }

  const right = (
    <div className={styles.action} tabIndex={0} onBlur={showActionTab(false)}>
      <MoreOutline
        fontSize={36}
        onClick={showActionTab()}
        data-testid="moreBtn"
      />
      {tabStatus && (
        <div data-testid="actionPanel">
          <div onClick={markAllRead}>Mark all read</div>
          <div onClick={removeAll}>Remove all</div>
        </div>
      )}
    </div>
  )

  return (
    <>
      <NavBar onBack={goBack} right={right} className={styles.header}>
        Notification
      </NavBar>
      {list.length > 0 ? (
        list.map((item, i) => <NotificationDetail {...item} key={i} />)
      ) : (
        <div className={styles['no-data']}>
          There is no notification for now
        </div>
      )}
    </>
  )
}
export default Notification
