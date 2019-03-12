var express = require('express');

var app = express();

app.get('/admin/genie/007', function(req, res) {


})
    .use(function(req, res, next) {
        res.setHeader('Content_Type', 'text/plain');
        res.status(404).send('Vous n\'avez pas accès à cette page!');
    });

app.listen(8080);