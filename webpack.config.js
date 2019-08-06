const path = require('path');
var webpack=require("webpack"); // I still do not understand pulgins 
module.exports = {
    mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
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
    })
  ]
  
};