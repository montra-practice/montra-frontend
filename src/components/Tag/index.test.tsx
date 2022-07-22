import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Tag from '.'

describe('test Tag component', () => {
  it('renders tags', () => {
    render(<Tag defaultValue="test" tags={['test']} />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  it('curretn selection change when click tag', () => {
    render(<Tag defaultValue="test" tags={['test', 'tag']} />)
    fireEvent.click(screen.getByText('tag'))
    expect(screen.getByText('tag')).toBeInTheDocument()
  })
})
