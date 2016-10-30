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
        loaders: ['babel?presets[]=es2015'],
        include: path.join(__dirname,'client')
      }
    ]
  }
}
