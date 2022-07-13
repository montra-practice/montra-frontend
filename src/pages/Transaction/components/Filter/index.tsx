import { Card, Button } from 'antd-mobile'
import Selector from '../Selector'
import DropdownList from '../DropdownList'
import { filterOptions, sortOptions } from '@/constants/transaction'

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
