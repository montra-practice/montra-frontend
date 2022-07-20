import { List, Switch } from 'antd-mobile'

export default () => {
  return (
    <List>
      <List.Item extra={<Switch defaultChecked />}>新消息通知</List.Item>
    </List>
  )
}
