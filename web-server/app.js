var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var router = express.Router();
var errorHandler = require('errorhandler');

app.use(methodOverride());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(router);
app.set('view engine', 'jade');
app.set('views', __dirname + '/public');
app.set('view options', {layout: false});
app.set('basepath',__dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
var oneYear = 31557600000;
app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
app.use(errorHandler());

console.log("Web server has started.\nPlease log on http://127.0.0.1:3001/index.html");

app.listen(3001);
