var config_path = __dirname + '/config'
require(config_path)

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var CrossDomain = require(__dirname + '/middleware/CrossDomain');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(CrossDomain.headers);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/api/:db/:collection/:id?', routes.query);
app.post('/api/:db/:collection', routes.insert);
app.post('/api/:db/:collection/:id/delete', routes.delete);
app.post('/api/:db/:collection/:id/update', routes.update);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
