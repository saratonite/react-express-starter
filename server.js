require("babel-register")({
	presets:['react','es2015']
});
var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');


console.log(ReactDOMServer);
var app = express();

var isDeveloping = true;
if(process.argv.length >2){
	 isDeveloping = process.argv[2] !== 'production';
}

if(isDeveloping){

	var webpack = require('webpack');

	var webpackConfig = require('./webpack.config.dev')
	var compiler = webpack(webpackConfig);

	app.use(require('webpack-dev-middleware')(compiler,{
	  noInfo:true,
	  publicPath:webpackConfig.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));

	compiler.plugin('compile',function(){
	  console.log('Bundling ...');
	});

	compiler.plugin('done',function(){
	  console.log('Bundling done');
	});

}


/**/
app.use('/static',express.static('./static'));

app.get('/ssr',function(req,res){

	var appRouter = require('./client/routes').default;
	console.log(appRouter);

	//const Xroutes = ReactRouter.createRoutes(appRouter);

	var html = ReactDOMServer.renderToString(React.createElement(appRouter));

 res.send(html);

});

app.get('*',function(req,res){

  res.sendFile(__dirname+'/index.html');
});

app.listen(8000);
console.log('Dev server listening on port 8000');
