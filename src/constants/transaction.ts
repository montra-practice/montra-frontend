import Shopping from '@/assets/icons/shopping.png'
import Food from '@/assets/icons/food.png'
import Subscription from '@/assets/icons/subscription.png'
import Transportation from '@/assets/icons/transportation.png'
import Salary from '@/assets/icons/salary.png'
import PassiveIncome from '@/assets/icons/passive_income.png'

import arrowRight from '@/assets/icons/arrow_right.svg'
import arrowDown from '@/assets/icons/arrow_down.svg'

export const ArrowRight = arrowRight
export const ArrowDown = arrowDown

export const SHOPPING = 'Shopping'
export const FOOD = 'Food'
export const SUBSCRIPTION = 'Subscription'
export const TRANSPORTATION = 'Transportation'
export const SALARY = 'Salary'

export const TRANSACTION_TYPES = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
  TRANSFER: 'TRANSFER',
}

export const TRANSACTION_TYPES_LABEL = {
  [TRANSACTION_TYPES.INCOME]: 'Income',
  [TRANSACTION_TYPES.EXPENSE]: 'Expense',
  [TRANSACTION_TYPES.TRANSFER]: 'Transfer',
}

// category type icon map
export const CategoryTypeIcons: { [key: number | string]: string } = {
  1: Shopping,
  2: Food,
  3: Subscription,
  4: Transportation,
  5: Salary,
  6: PassiveIncome,
}

export const CategoryTypeColor: { [key: number | string]: string } = {
  1: '#FCAC12',
  2: '#FD3C4A',
  3: '#7F3DFF',
  4: '#0077FF',
  5: '#00A86B',
  6: '#0D0E0F',
}

/*** MOCK DATA */
export const filterOptions = Object.keys(TRANSACTION_TYPES).map(
  (type, index) => ({ label: TRANSACTION_TYPES_LABEL[type], value: index + 1 }),
)

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

export const categoryTypes = [
  {
    value: '1',
    label: SHOPPING,
  },
  {
    value: '2',
    label: FOOD,
  },
  {
    value: '3',
    label: SUBSCRIPTION,
  },
  {
    value: '4',
    label: TRANSPORTATION,
  },
  {
    value: '5',
    label: SALARY,
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
        id: 1,
        type: SHOPPING,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
      {
        id: 2,
        type: FOOD,
        desc: 'test',
        money: '32',
        time: '3:00 PM',
      },
      {
        id: 3,
        type: SUBSCRIPTION,
        desc: 'test',
        money: '80',
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

export const selectOptions = [
  {
    value: '1',
    label: 'Month',
  },
  {
    value: '2',
    label: 'Week',
  },
  {
    value: '3',
    label: 'Year',
  },
]

export const walletTypes = [
  {
    value: '1',
    label: 'Wallet',
  },
  {
    value: '2',
    label: 'Bank',
  },
  {
    value: '3',
    label: 'Paypal',
  },
]

export const selectEndAfterTimes = (() => {
  let arr = []
  for (let i = 1; i < 10; i++) {
    const iStr = String(i)
    arr.push({ value: iStr, label: iStr })
  }

  return arr
})()

export const repeatObj = {
  repeat: false,
  frequency: '',
  endAfter: '',
}
