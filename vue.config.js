const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: false,
  configureWebpack: {
    resolve: {
      alias: {
        pinia$: path.resolve(__dirname, "node_modules/pinia/index.js"),
      },
    },
  },
});
