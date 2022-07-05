// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import Schema from 'async-validator'

const originError = console.error

Schema.warning = jest.fn()

excludeWarning()
// remove px tester warning
// https://github.com/ant-design/ant-design-mobile/issues/5192
function excludeWarning() {
  const errorSpy = jest.spyOn(console, 'error')
    .mockImplementation((msg, ...rest) => {
      if (
        String(msg).includes(
          'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.'
        )
      ) {
        return
      }
      originError(msg, ...rest)
    })

  return () => {
    errorSpy.mockRestore()
  }
}
