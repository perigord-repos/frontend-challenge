module.exports = {
    component: {
      devServer: {
        framework: "create-react-app",
        bundler: "webpack",
      },
    },
    e2e: {
      specPattern: "cypress/integration/e2e/**/*",
      setupNodeEvents: function(on, config) {
        // implement node event listeners here
      },
    }
  };
  