import styles from './index.scss'

function NotificationDetail({ title, description, time }: INotification) {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div className={styles.right}>{time}</div>
    </div>
  )
}
export default NotificationDetail
