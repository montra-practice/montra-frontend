import { Space, Swiper, Button } from 'antd-mobile'
import controlMoneyImg from '@/assets/images/control_money.png'
import whereYourMoneyImg from '@/assets/images/where_your_money_goes.png'
import planningImg from '@/assets/images/planning_ahead.png'
import styles from './index.scss'

function Landing() {
  const swiperList = [
    {
      image: controlMoneyImg,
      title: 'Gain total control of your money',
      description: 'Become your own money manager and make every cent count',
    },
    {
      image: whereYourMoneyImg,
      title: 'Know where your money goes',
      description:
        'Track your transaction easily, with categories and financial report',
    },
    {
      image: planningImg,
      title: 'Planning ahead',
      description: 'Setup your budget for each category so you in control',
    },
  ]
  console.log(styles['landing-item'])
  return (
    <div className={styles.wrapper}>
      <Space direction="vertical" block>
        <Swiper
          className={styles.indicator}
          style={{
            '--track-padding': ' 0 0 52px',
          }}
          indicatorProps={{
            className: styles.indicator
          }}
          defaultIndex={0}
        >
          {swiperList.map((item, index) => (
            <Swiper.Item key={index}>
              <div className={styles['landing-item']}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      </Space>
      <div className={styles.buttons}>
        <Button block color="primary" size="large">
          Sign Up
        </Button>
        <Button block size="large">
          Login
        </Button>
      </div>
    </div>
  )
}

export default Landing
