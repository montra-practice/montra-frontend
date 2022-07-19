import { screen, render } from '@testing-library/react'
import Transaction from '.'

describe('test transaction page', () => {
  describe('render page UI', () => {
    it('should rend financial guide btn', () => {
      render(<Transaction />)

      expect(screen.getByText(/see you financial report/i)).toBeInTheDocument()
    })
  })
})
