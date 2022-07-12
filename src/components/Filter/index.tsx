import { Card, Button } from 'antd-mobile'
import Selector from '../Selector'
import DropdownList from '../DropdownList'

const filterOptions = [
  {
    value: 1,
    label: 'shopping',
  },
  {
    value: 2,
    label: 'food',
  },
  {
    value: 3,
    label: 'subscription',
  },
  {
    value: 4,
    label: 'transportation',
  },
  {
    value: 5,
    label: 'salary',
  },
]

const sortOptions = [
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

export default () => {
  return (
    <Card>
      <div>
        <span>Fitler Title</span>
        <Button>Reset</Button>
      </div>
      <div>
        <div>Fillter By</div>
        <Selector options={filterOptions} />
      </div>
      <div>
        <div>Sort By</div>
        <Selector options={sortOptions} />
      </div>
      <div>
        <div>Category</div>
        <DropdownList title="Category Type" />
      </div>
    </Card>
  )
}
