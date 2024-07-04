const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Robert Arning – UI/UX Designer',
      favicon: './src/img/favicon.ico',
      template: './src/template.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './data/data.json', to: 'data/data.json' },
        { from: './src/img/ra-logo.svg', to: 'img/ra-logo.svg' },
        { from: './src/img/ra-logo-solo.svg', to: 'img/ra-logo-solo.svg' },
        { from: './media', to: 'media' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
};
