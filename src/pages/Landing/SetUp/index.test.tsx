import { render, screen } from '@testing-library/react'
import SetUp from './index'

describe('test SetUp component', () => {
  test('render SetUp', () => {
    render(<SetUp />)

    expect(screen.getByText('Let’s setup your account!')).toBeInTheDocument()
  })
})
