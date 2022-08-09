import { screen, render } from '@testing-library/react'
import BottomCard from '.'

const mockContent = 'BottomCard'

describe('Test BottomCard Component', () => {
  it('render with top icon', () => {
    render(<BottomCard withIcon={true}>{mockContent}</BottomCard>)
    expect(screen.getByTestId('topIcon')).toBeInTheDocument()
    expect(screen.getByText(mockContent)).toBeInTheDocument()
  })

  it('render without top icon', () => {
    render(<BottomCard withIcon={false}>{mockContent}</BottomCard>)
    expect(screen.queryByTestId('topIcon')).not.toBeInTheDocument()
    expect(screen.getByText(mockContent)).toBeInTheDocument()
  })
})
