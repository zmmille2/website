// use express and pug to start this bad boy
var express = require('express');
var pug = require('pug');

// start the app!
var app = express();

// Let's say who this is, and show that js can handle different quotation types!
app.locals.title = "Zach's site"
app.locals.email = "zmmille2@gmail.com"

// use pug as our viewing engine
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', {});
});

app.get('*', function(req, res) {
    res.status(404).render('404', {})
});

app.listen(3000);
