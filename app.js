/*
'use strict';
var statik = require('statik');
var server = statik.createServer('.');
server.listen();
*/

/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var admin_enter_wine = require('./routes/admin_enter_wine');
var log_all_wine_json = require('./routes/log_all_wine_json');
var pinot_holder = require('./routes/pinot_holder');
var admin_delete_wine = require('./routes/admin_delete_wine');
var login = require('./routes/login');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/admin_enter_wine', admin_enter_wine.view);
app.get('/log_all_wine_json',log_all_wine_json.all_wine);
app.get('/pinot_holder', pinot_holder.view);
apt.get('/admin_delete_wine',admin_delete_wine.delete_wine);
app.get('/login', login.view);

//app.get('/add', add.addFriend);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

