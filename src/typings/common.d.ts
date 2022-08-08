declare interface IOption {
  value: string
  label?: string
}

declare interface ISelect {
  size: 'large' | 'middle' | 'small'
  arrow: 'right' | 'left'
  options: IOption[]
  onSelect?: (item: IOption) => void
  selectedWithBorder?: boolean
  defaultValue?: string
  defaultLabel?: string
  className?: any
  disabled?: boolean
}

declare interface ITransaction {
  id: number | string // type id
  type: string
  desc: string
  money: number | string
  time: string
  date?: string
}

declare interface INotification {
  title: string
  description: string
  time: string
}

declare interface IFilterItems {
  filter: Array
  sorter: Array
  cateType: Array
}

// transaction detail
declare interface ITransDetail {
  amount: number
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
