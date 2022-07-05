// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
// import * as jest from 'jest'
import Schema from 'async-validator'

const originError = console.error

// remove px tester warning
// export function excludeWarning() {
//   const errorSpy = jest.spyOn(console, 'error')
//     .mockImplementation((msg, ...rest) => {
//       if (
//         String(msg).includes(
//           'The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`.'
//         )
//       ) {
//         return
//       }
//       originError(msg, ...rest)
//     })
//
//   return () => {
//     errorSpy.mockRestore()
//   }
// }

Schema.warning = jest.fn()

excludeWarning()
// remove px tester warning
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
