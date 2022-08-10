import { screen, fireEvent, render } from '@testing-library/react'
import { sync } from 'resolve'
import DialogShow from '.'

const mockData = {
  msg: 'msg',
  fn: jest.fn(),
  title: 'Title',
}

const testFn = () => {
  DialogShow(mockData.msg, mockData.fn, mockData.title)
}

describe('Test DialogShow Component', () => {
  it('Render DialogShow', () => {
    render(<button onClick={testFn}>Test</button>)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(screen.getByText('msg')).toBeInTheDocument()
  })
})
