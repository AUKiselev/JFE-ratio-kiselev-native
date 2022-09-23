const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HTMLPlugin({
      filename: 'blog.html',
      template: './src/blog.html',
    }),
    new HTMLPlugin({
      filename: 'article.html',
      template: './src/article.html',
    }),
    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, 'src/assets'),
            to:   path.resolve(__dirname, 'dist/assets')
          }
        ]
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ]
  }
}