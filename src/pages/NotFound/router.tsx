import { Route } from 'react-router'
import NotFound from './index'

const ROUTE_PATH = {
  NOT_FOUND: '/404',
}

export default [
  <Route
    path={ROUTE_PATH.NOT_FOUND}
    element={<NotFound />}
    key={ROUTE_PATH.NOT_FOUND}
  />,
]
