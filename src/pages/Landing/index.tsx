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
  return (
    <>
      <Space direction="vertical" block>
        <Swiper
          indicator={(total, current) => (
            <div className={styles.indicator}>
              {`${current + 1} / ${total}`}
            </div>
          )}
          defaultIndex={0}
        >
          {swiperList.map((item, index) => (
            <Swiper.Item key={index}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Swiper.Item>
          ))}
        </Swiper>
      </Space>
      <Button block color="primary" size="large">
        Sign Up
      </Button>
      <Button block size="large">
        Login
      </Button>
    </>
  )
}

export default Landing
