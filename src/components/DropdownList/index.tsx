// dropdownlist created for category selecting
import { CheckList } from 'antd-mobile'
import rightArrow from '@/assets/icons/arrow.svg'

type DropDonwList = {
  title: string
  showSelectedNum?: boolean
  options?: any
}

export default (p: DropDonwList) => {
  const showSelecedNum = p.showSelectedNum || true
  return (
    <div>
      <div>
        <span>{p.title}</span>
        {showSelecedNum && <span>0 selected</span>}
        <img src={rightArrow} alt="right arrow"></img>
      </div>
      <CheckList multiple defaultValue={['B', 'C']}>
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C">C</CheckList.Item>
      </CheckList>
    </div>
  )
}
