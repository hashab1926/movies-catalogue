const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    host: "192.168.0.198",
    port: 8080,
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, "dist"),
  },
});
