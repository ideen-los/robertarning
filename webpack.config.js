const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Enables splitting of all chunks
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Robert Arning',
      favicon: './src/img/favicon.ico',
      template: './src/template.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './data/data.json', to: 'data/data.json' },
        { from: './src/img/ra-logo.svg', to: 'img/ra-logo.svg' },
        { from: './media', to: 'media' },
      ],
    }),
  ],
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js', // Ensures unique filenames
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource', // This specifies how the asset should be handled
        generator: {
          filename: 'fonts/[name][ext]', // Defines the output file name pattern
        },
      },
    ],
  },
};
