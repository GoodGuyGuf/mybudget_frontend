const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'main.bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    https: false,
    open: true,
    compress: true,
    hot: true,
    port: 8000

  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "MyBudget",
      filename: 'index.html'
    })
  ]
};