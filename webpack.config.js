const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true, // defaults to index.html when a 404 error occurs
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      template: './src/template.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './data/data.json', to: 'data/data.json' },
        { from: './media', to: 'media' },
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        // Rule for SCSS files
        test: /\.scss$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Turns CSS into commonjs
          'sass-loader', // Turns SCSS into CSS
        ],
      },
      {
        // Rule for CSS files
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader', // Turns CSS into commonjs
        ],
      },
      {
        // Rule for image files
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
