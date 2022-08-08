import Shopping from '@/assets/icons/shopping.png'
import Food from '@/assets/icons/food.png'
import Subscription from '@/assets/icons/subscription.png'
import Transportation from '@/assets/icons/transportation.png'
import Salary from '@/assets/icons/salary.png'
import PassiveIncome from '@/assets/icons/passive_income.png'
import Others from '@/assets/icons/others.svg'
import Transfer from '@/assets/icons/transfer.svg'

import arrowRight from '@/assets/icons/arrow_right.svg'
import arrowDown from '@/assets/icons/arrow_down.svg'

export const ArrowRight = arrowRight
export const ArrowDown = arrowDown

export const SHOPPING = 'Shopping'
export const FOOD = 'Food'
export const SUBSCRIPTION = 'Subscription'
export const TRANSPORTATION = 'Transportation'
export const SALARY = 'Salary'
export const PASSIVE_INCOME = 'Passive Income'
export const OTHERS = 'Others'

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
  7: Others,
  8: Transfer,
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

export const categoryExpense = [
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
    value: '7',
    label: OTHERS,
  },
]
export const categoryIncome = [
  {
    value: '5',
    label: SALARY,
  },
  {
    value: '6',
    label: PASSIVE_INCOME,
  },
  {
    value: '7',
    label: OTHERS,
  },
]
export const categoryTypes = [...categoryExpense, ...categoryIncome]

export const transactionList = [
  {
    date: 'Today',
    list: [
      {
        transId: '121213133',
        transType: TRANSACTION_TYPES.EXPENSE,
        id: 1,
        type: SHOPPING,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
      {
        transId: '1wqe113wqe',
        transType: TRANSACTION_TYPES.EXPENSE,
        id: 2,
        type: FOOD,
        desc: 'test',
        money: '89',
        time: '3:00 PM',
      },
      {
        transId: '1213fer4erd',
        transType: TRANSACTION_TYPES.EXPENSE,
        id: 3,
        type: SUBSCRIPTION,
        desc: 'test',
        money: '813',
        time: '3:00 PM',
      },
    ],
  },
  {
    date: 'Yesterday',
    list: [
      {
        transId: '231fadaf',
        transType: TRANSACTION_TYPES.INCOME,
        id: 5,
        type: SALARY,
        desc: 'test',
        money: '123',
        time: '3:00 PM',
      },
      {
        transId: '1fa414',
        transType: TRANSACTION_TYPES.INCOME,
        id: 6,
        type: PASSIVE_INCOME,
        desc: 'test',
        money: '32',
        time: '3:00 PM',
      },
      {
        transId: '9trw113452',
        transType: TRANSACTION_TYPES.EXPENSE,
        id: 7,
        type: 'Others',
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
        transId: '952424t52',
        transType: TRANSACTION_TYPES.EXPENSE,
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
        transId: '523151rf1',
        transType: TRANSACTION_TYPES.EXPENSE,
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
        transId: '62762341551',
        transType: TRANSACTION_TYPES.TRANSFER,
        id: 8,
        type: 'Transfer',
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
  for (let i = 1; i < 12; i++) {
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

export const transDetail = [
  {
    amount: 120,
    createTime: 'Saturday 4 June 2021 16:20',
    type: TRANSACTION_TYPES.INCOME,
    typeName: TRANSACTION_TYPES_LABEL[TRANSACTION_TYPES.INCOME],
    categoryId: '1',
    categoryName: 'Shopping',
    walletId: '1',
    walletName: 'Wallet',
    describe:
      // eslint-disable-next-line max-len
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    attachType: 'img',
    attachName: '',
    attachSrc:
      '	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…W8J/3zlTRKvBVx/vwf+fJj7H/ADv/AOKv/ryYcmb4L5P/2Q==',
  },
  {
    amount: 320,
    createTime: 'Saturday 4 June 2021 16:20',
    type: TRANSACTION_TYPES.EXPENSE,
    typeName: TRANSACTION_TYPES_LABEL[TRANSACTION_TYPES.EXPENSE],
    categoryId: '1',
    categoryName: 'Shopping',
    walletId: '1',
    walletName: 'Wallet',
    describe:
      // eslint-disable-next-line max-len
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    attachType: 'file',
    attachName: 'test.docx',
    attachSrc: 'https://www.baidu.com',
  },
  {
    amount: 3000,
    createTime: 'Saturday 4 June 2021 16:20',
    type: TRANSACTION_TYPES.TRANSFER,
    typeName: TRANSACTION_TYPES_LABEL[TRANSACTION_TYPES.TRANSFER],
    fromName: 'Jack',
    toName: 'Rose',
    describe: 'Jack transfer Rose $3000, Rose will return all in July',
    attachType: '',
    attachName: '',
    attachSrc:
      '	data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…W8J/3zlTRKvBVx/vwf+fJj7H/ADv/AOKv/ryYcmb4L5P/2Q==',
  },
]
