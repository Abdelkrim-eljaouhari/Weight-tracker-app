var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var webpack=require("webpack"); // I still do not understand pulgins 
module.exports = {
    mode: 'development',
  entry:'./src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.scss$/,
        use :[
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[ext]'}
          },
        ],
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({  
      filename: 'html/index.html',
      template: './src/html/index.html'
    })
  ]
  
};