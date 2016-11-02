var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry:[
    './client/main'
  ],
  output: {
    path: path.join(__dirname,'static'),
    filename: 'bundle.js',
    publicPath:'/static/'
  },
  plugins: [

  ],
  module: {
    loaders: [
      // Javascript
      {
        test: /\.js$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
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
  }
}
