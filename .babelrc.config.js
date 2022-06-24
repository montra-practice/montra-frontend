module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      ['react-app', false],
      '@babel/preset-env',
      {
        targets: {
          chrome: '49',
          ios: '10',
        },
      },
    ],
    env: {
      test: {
        presets: [['env', { targets: { node: 'current' } }]],
      },
      development: {
        presets: [['env', { targets: { node: 'current' } }]],
      },
    },
  }
}
