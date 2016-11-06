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
app.set('views', __dirname + '/../views/');

// Without any specification, connect to the home page.
app.get('/', function(req, res) {
    res.render('index', {});
});

// If we don't match any of the subpages, connect to the 404 page.
// This should go at the end.
app.get('*', function(req, res) {
    res.status(404).render('404', {})
});

app.listen(3000);
