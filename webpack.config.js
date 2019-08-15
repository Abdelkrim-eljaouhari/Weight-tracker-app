var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var webpack=require("webpack"); // I still do not understand pulgins 
module.exports = {
    mode: 'development',
  entry: {
    main:'./src/js/index.js',
    history:'./src/js/history.js'
  },
  output: {
    filename: '[name].js',
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
    }),
    new HtmlWebpackPlugin({  
      filename: 'html/history.html',
      template: './src/html/history.html'
    }),
    new HtmlWebpackPlugin({  
      filename: 'html/chart.html',
      template: './src/html/chart.html'
    }),
    new HtmlWebpackPlugin({  
      filename: 'html/weightcomparison.html',
      template: './src/html/weightcomparison.html'
    })
  ]
  
};