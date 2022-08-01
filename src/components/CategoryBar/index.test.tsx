import { render, screen } from '@testing-library/react'
import CategoryBar from '.'
import React from 'react'
import { SHOPPING } from '@/constants/transaction'

describe('test Category Bar', () => {
  it('should render static text', () => {
    const mockData = {
      id: 1,
      type: SHOPPING,
      desc: 'test',
      money: '123',
      time: '3:00 PM',
    }
    render(<CategoryBar {...mockData} />)
    expect(screen.getByText('Shopping')).toBeInTheDocument()
  })
})
