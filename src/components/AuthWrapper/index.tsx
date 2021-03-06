import { ReactNode } from 'react'
import Token from '@/utils/token'
import { Navigate, Route } from 'react-router-dom'

const WHITE_ROUTE_LIST = [/^\/$/, /\/landing.*/, /^\/reset-password$/]

export default (Component: ReactNode, currentPathname: string) => {
  const { getToken } = Token('token')

  const isInWhiteList = WHITE_ROUTE_LIST.some((pathRegx) =>
    pathRegx.test(currentPathname),
  )

  return (
    <Route
      index
      element={
        getToken() || isInWhiteList ? Component : <Navigate replace to="/" />
      }
    />
  )
}
