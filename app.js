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
var process_login = require('./routes/process_login');
var logout = require('./routes/logout');
var manual_add = require('./routes/manual_add');
var user_index = require('./routes/user_index');
var admin_sign_up = require('./routes/admin_sign_up');
var admin_post_wine = require('./routes/admin_post_wine');


var admin_sign_up_check = require('./routes/admin_sign_up_check');

var user_all_wines=require('./routes/user_all_wines');


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
app.get('/index', index.view);
app.get('/admin_enter_wine', admin_enter_wine.view);
app.get('/log_all_wine_json',log_all_wine_json.all_wine);
app.get('/pinot_holder', pinot_holder.view);
app.get('/admin_delete_wine',admin_delete_wine.delete_wine);
app.post('/process_login',process_login.process);
app.get('/manual_add', manual_add.add);
app.get('/logout',logout.process_logout);
app.get('/user_index', user_index.view);
app.get('/admin_sign_up', admin_sign_up.view);

app.post('/admin_sign_up_check',admin_sign_up_check.check);
app.post('/admin_post_wine',admin_post_wine.post_wine);

app.get('/user_all_wines',user_all_wines.view);


app.get('/', login.view);


//app.get('/add', add.addFriend);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

