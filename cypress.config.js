const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "y36uov",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
