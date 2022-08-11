export default () => {
  const mockMediaStream = {
    getTracks: function () {
      return [{ stop: jest.fn() }]
    },
  }
  const mockMediaDevices = {
    getUserMedia: jest.fn(() => {
      return Promise.resolve(mockMediaStream)
    }),
  }

  Object.defineProperty(window.navigator, 'mediaDevices', {
    writable: true,
    value: mockMediaDevices,
  })

  Object.defineProperty(window.URL, 'createObjectURL', {
    writable: true,
    value: jest.fn(),
  })
}
