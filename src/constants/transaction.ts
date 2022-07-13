import Shopping from '@/assets/icons/shopping.png'
import Food from '@/assets/icons/food.png'
import Subscription from '@/assets/icons/subscription.png'
import Transportation from '@/assets/icons/transportation.png'
import Salary from '@/assets/icons/salary.png'

import rightArrow from '@/assets/icons/arrow.svg'

export const RightArrow = rightArrow

export const SHOPPING = 'Shopping'
export const FOOD = 'Food'
export const SUBSCRIPTION = 'Subscription'
export const TRANSPORTATION = 'Transportation'
export const SALARY = 'Salary'

// categroy type icon map
export const CategoryTypeIcons: { [key: number | string]: string } = {
  1: Shopping,
  2: Food,
  3: Subscription,
  4: Transportation,
  5: Salary,
}

/*** MOCK DATA */
export const filterOptions = [
  {
    value: 1,
    label: SHOPPING,
  },
  {
    value: 2,
    label: FOOD,
  },
  {
    value: 3,
    label: SUBSCRIPTION,
  },
  {
    value: 4,
    label: TRANSPORTATION,
  },
  {
    value: 5,
    label: SALARY,
  },
]
export const sortOptions = [
  {
    value: 1,
    label: 'Highest',
  },
  {
    value: 2,
    label: 'Lowest',
  },
  {
    value: 3,
    label: 'Newest',
  },
  {
    value: 4,
    label: 'Oldest',
  },
]

export const transactionList = [
  {
    date: 'Today',
    list: [
      {
        id: 1,
        type: SHOPPING,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
      {
        id: 1,
        type: SHOPPING,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
      {
        id: 1,
        type: SHOPPING,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
    ],
  },
  {
    date: 'Yesterday',
    list: [
      {
        id: 2,
        type: FOOD,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
    ],
  },
  {
    date: '9/11',
    list: [
      {
        id: 3,
        type: SUBSCRIPTION,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
    ],
  },
  {
    date: '7/11',
    list: [
      {
        id: 4,
        type: TRANSPORTATION,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
    ],
  },
  {
    date: '5/11',
    list: [
      {
        id: 5,
        type: TRANSPORTATION,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
    ],
  },
]
