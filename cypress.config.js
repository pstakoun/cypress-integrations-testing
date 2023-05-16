const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "f1ize3",
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
