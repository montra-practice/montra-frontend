import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Attachment from '.'
import deviceMock from './deviceMock'

const mockOnAttach = jest.fn()

const files = [
  new File(['hello'], 'hello.png', { type: 'image/png' }),
  new File(['hi'], 'hi.pdf', { type: '.pdf' }),
]

const renderFileChosenMask = async () => {
  render(<Attachment onAttach={mockOnAttach} />)
  userEvent.click(screen.getByRole('menubar'))
  await screen.findByTestId('attachmentMask')
}

const mockFileUpload = async (altText: string, file: File) => {
  await renderFileChosenMask()
  userEvent.click(screen.getByAltText(altText))
  const uploader = screen.getByTestId('uploader') as HTMLInputElement
  URL.createObjectURL = jest.fn()
  await userEvent.upload(uploader, file)
  expect(uploader.files).toHaveLength(1)
  expect(uploader.files?.item(0)).toBe(file)
  expect(screen.queryByTestId('attachmentMask')).not.toBeInTheDocument()
  expect(mockOnAttach).toBeCalled()
}

describe('Test Attachment Component', () => {
  it('Should render Attachment', () => {
    render(<Attachment />)
    expect(screen.getByText('Add attachment')).toBeInTheDocument()
  })

  it('Should show bottom type-chosen card on clicking [Add attachment]', async () => {
    await renderFileChosenMask()
    expect(screen.getByAltText('camera icon')).toBeInTheDocument()
    expect(screen.getByAltText('gallery icon')).toBeInTheDocument()
    expect(screen.getByAltText('doc icon')).toBeInTheDocument()
  })

  it('Should show camera page on clicking Camera Icon', async () => {
    await renderFileChosenMask()
    deviceMock()
    userEvent.click(screen.getByAltText('camera icon'))
    expect(screen.getByRole('application')).toBeInTheDocument()
  })

  it('Should upload image when clicking Image icon', async () => {
    mockFileUpload('gallery icon', files[0])
  })

  it('Should upload other type files when clicking doc icon', async () => {
    mockFileUpload('doc icon', files[1])
  })
})
