const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  // assign which folder as a root folder when serving
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
  },
  module: {
    rules: [
      // insert css styles as <style> tag
      // {
      //   test: /\.css$/,
      //   // test: /\.(css|scss)$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //       },
      //     },
      //   ],
      // },
      // extract css to a separate file in dist folder instead inserting styles as <style> tag
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // install babel, compile ES6+ to fit old browsers
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // move setting to `babel.config`
          // options: {
          //   presets: ['@babel/preset-env'],
          // },
        },
      },
    ],
  },
  plugins: [
    // automatically generate a html file to adapt hashed filename base on the template file
    new HtmlWebpackPlugin({ template: './template.html' }),
    // extract css file, and add hash to filename
    new MiniCssExtractPlugin({ filename: 'main.[hash].css' }),
  ],
};
