// selector create for item selecting
import { Selector } from 'antd-mobile'
import { SelectorProps } from 'antd-mobile/es/components/selector'

export default (p: SelectorProps<string | number>) => {
  return (
    <Selector
      showCheckMark={p.showCheckMark || false}
      multiple={p.multiple || true}
      options={p.options}
      defaultValue={p.defaultValue}
    />
  )
}
