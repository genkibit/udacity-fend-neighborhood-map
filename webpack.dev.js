var path = require("path");
var common = require("./webpack.common");
var merge = require("webpack-merge");
var DotenvPlugin = require("dotenv-webpack");


module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new DotenvPlugin({path: path.resolve(__dirname, '.env')})
  ]
});