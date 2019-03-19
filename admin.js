const auth = require('./auth')
var express = require('express');

var app = express();

app.use(auth, function(req, res) {
    res.setHeader('Content_Type', 'text/plain');
    res.status(404).send('Vous avez accès à cette page!');
});

/* app.get('/admin', function(req, res) {

    app.use(auth, function(req, res) {
        res.setHeader('Content_Type', 'text/plain');
        res.status(404).send('Vous avez accès à cette page!');
    });

});
    .use(function(req, res, next) {
        res.setHeader('Content_Type', 'text/plain');
        res.status(404).send('Vous n\'avez pas accès à cette page!');
    });*/

app.listen(8080);