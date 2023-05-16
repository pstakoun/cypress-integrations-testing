const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "yjvowb",
    retries: 2,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
