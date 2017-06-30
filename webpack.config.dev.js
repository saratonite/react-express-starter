var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry:{
        main:['react-hot-loader/patch','webpack-hot-middleware/client?path=/__what','./client/main']
    
  },
  output: {
    path: path.join(__dirname,'static'),
    filename: 'bundle.js',
    publicPath:'/static/'
  },
  module: {
    loaders: [
      // Javascript
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack','babel-loader?presets[]=es2015&presets[]=react'],
        include: path.join(__dirname,'client')
      },
      // Css loader
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader'],
        include: path.join(__dirname,'client')
      },
      //Scss (sass) loader
      {
        test: /\.scss$/,
        loaders: ['style-loader','css-loader','sass-loader'],
        include:path.join(__dirname,'client')
      }
    ]
  },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
}
