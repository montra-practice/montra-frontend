import { Route } from 'react-router'
import NewTransaction from '.'

export default [
  <Route
    path="newTransaction"
    element={<NewTransaction />}
    key="NewTransaction"
  />,
]
