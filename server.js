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

var app = express();
app.appName = 'hx_order';

// require('../config/database')(app.config.database.url, mongoose);

app.get('/', function (req, res) {
    res.send('Hello World');
});

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

var server = app.listen(app.get('port'), function () {
    console.log("✔ Express server [" + app.appName + "] listening on port %d in %s mode", app.get('port'), app.get('env'));
});