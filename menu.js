var express = require('express');

var app = express();

app.get('/menu', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send('Bienvenue dans le menu');
})

.get('/mainPage', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send('Bienvenue dans la page principale');
})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});


app.listen(8080);
