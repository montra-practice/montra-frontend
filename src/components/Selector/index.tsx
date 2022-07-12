// selector create for item selecting
import { Selector } from 'antd-mobile'
import { SelectorProps } from 'antd-mobile/es/components/selector'

export default (p: SelectorProps<string | number>) => {
  return (
    <Selector
      style={{
        '--border-radius': '100px',
        '--border': 'solid transparent 1px',
        '--checked-border': 'solid var(--adm-color-primary) 1px',
        '--padding': '8px 24px',
      }}
      showCheckMark={p.showCheckMark || false}
      multiple={p.multiple || true}
      options={p.options}
      defaultValue={p.defaultValue}
    />
  )
}
