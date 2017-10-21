/**
 * Created by ZhangXiao on 2017/10/21.
 */
"use strict";
var express = require('express');
var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var pkg = require('./package.json');
var fs = require('fs');

var app = express();
app.appName = 'hx_order';

// require('../config/database')(app.config.database.url, mongoose);

app.set('env', env);
app.set('port', 3000);
app.set('views', './views');
app.set('view engine', 'jade');
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/*' }));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser(pkg.name));

// var modulePath = __dirname + '/' + 'controller';
// fs.readdirSync(modulePath).forEach(function (file) {
//     console.log('file---------------->', file);
//     require('./controller/'+file);
// });

app.get('/test', function (req, res) {
    res.render('index');
});

var server = app.listen(app.get('port'), function () {
    console.log("✔ Express server [" + app.appName + "] listening on port %d in %s mode", app.get('port'), app.get('env'));
});