module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ["react-app", false],
    ],
    env: {
      test: {
        presets: [["env", { "targets": { "node": "current" } }]],
      },
      development: {
        presets: [["env", { "targets": { "node": "current" } }]],
      }
    }
  }
}
