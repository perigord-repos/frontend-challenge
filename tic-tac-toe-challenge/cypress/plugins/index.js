require('ts-node').register({ files: true });

const webpackConfig = require('@cypress/react/plugins/react-scripts')

module.exports = (on, config) => {
  webpackConfig(on, config)

  return config
}