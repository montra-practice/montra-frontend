import { Button, NavBar } from 'antd-mobile'
import { SmileOutline } from 'antd-mobile-icons'
import RemoveIcon from '@/assets/icons/remove.png'
import { useNavigate, useParams } from 'react-router'
import RemoveAlert from '@/components/RemoveAlert'
import DialogShow from '@/components/DialogShow'
import ControlMoneyImg from '@/assets/images/control_money.png'
import { transDetail } from '@/constants/transaction'
import styles from './index.scss'
import { useEffect, useState } from 'react'
import { goBack } from '@/utils/common'

interface IDetail {
  amount: number
  desc: string
  createTime: string
  type: string
  typeName: string
  categoryId?: string
  categoryName?: string
  walletId?: string
  walletName?: string
  describe: string
  attachType: string
  attachName: string
  attachSrc: string
  fromName?: string
  toName?: string
}

export default () => {
  const navigate = useNavigate()
  const { transId } = useParams()

  const initData: IDetail = {
    amount: 0,
    desc: '',
    createTime: '',
    type: '',
    typeName: '',
    categoryId: '',
    categoryName: '',
    walletId: '',
    walletName: '',
    describe: '',
    attachType: '',
    attachName: '',
    attachSrc: '',
    fromName: '',
    toName: '',
  }

  const [removeVisible, setRemoveVisible] = useState(false)
  const [data, setData] = useState(initData)

  const handleRemoveVisible = () => {
    setRemoveVisible(!removeVisible)
  }
  const handleRemoveConfirm = () => {
    handleRemoveVisible()
    DialogShow('Remove successfully', () => {
      navigate('/transaction')
    })
  }

  const handleEdit = () => {
    switch (data.type) {
      case 'INCOME':
        navigate('/income')
        break
      case 'EXPENSE':
        navigate('/expense')
        break
      case 'TRANSFER':
        navigate('/transfer')
    }
  }

  const NavRight = (
    <img
      src={RemoveIcon}
      alt="remove icon"
      onClick={handleRemoveVisible}
      className={styles.delete}
    />
  )

  useEffect(() => {
    console.log('transId', transId)
    // request detail info
    setData(transDetail[1])
  }, [])

  const isTransfer = data.type === 'TRANSFER'
  const bgClassName = data.type.toLocaleLowerCase()

  return (
    <>
      <div className={styles[bgClassName]}>
        <NavBar onBack={goBack} className="nav-bar-white" right={NavRight}>
          Transaction Detail
        </NavBar>
      </div>

      <div className={`${styles.top} ${styles[bgClassName]}`}>
        <div className={styles.amount}>${data.amount}</div>
        <div className={styles['type-desc']}>{data.desc}</div>
        <div className={styles.create}>{data.createTime}</div>
      </div>

      <div className={styles['type-card']}>
        <div className={styles.item}>
          <div className={styles.type}>Type</div>
          <div className={styles['type-name']}>{data.typeName}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.type}>{isTransfer ? 'From' : 'Category'}</div>
          <div className={styles['type-name']}>
            {isTransfer ? data.fromName : data.categoryName}
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.type}>{isTransfer ? 'To' : 'Wallet'}</div>
          <div className={styles['type-name']}>
            {isTransfer ? data.toName : data.walletName}
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.line}></div>
        <div>
          <span className={styles.title}>Description</span>
          <p className={styles.desc}>{data.describe}</p>
        </div>
        <div>
          <span className={styles.title}>Attachment</span>
          {data.attachType === 'file' && (
            <a href={data.attachSrc} className={styles.file}>
              {data.attachName}
            </a>
          )}
          {data.attachType === 'img' && (
            <img
              src={ControlMoneyImg}
              alt="attachment img"
              className={styles.img}
            />
          )}
          {!data.attachType && (
            <div className={styles.empty}>
              <SmileOutline />
              There's no attachment!
            </div>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        <Button className="btn-big" onClick={handleEdit}>
          Edit
        </Button>
      </div>

      <RemoveAlert
        visible={removeVisible}
        onConfirm={handleRemoveConfirm}
        onCancel={handleRemoveVisible}
      ></RemoveAlert>
    </>
  )
}
