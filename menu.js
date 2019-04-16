var express = require('express');

var app = express();

app.use('/', express.static('public'));

//Portion de code provenant de https://developers.google.com/maps/documentation/javascript/examples/map-simple
app.get('/mainPage', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('views/map.html', { root: __dirname });
})



    .get('/menu', function(req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile('views/menu.html', {root: __dirname});
        //À lire pour comprendre les popup https://www.toutjavascript.com/savoir/savoir15.php3
        // À regarder https://www.youtube.com/watch?v=gLWIYk0Sd38
        //https://www.cssfontstack.com/ pour choisir des fonts
    })

    .get('/bombes', function(req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile('views/bombes.html', {root: __dirname});
    })

.use(function(req, res, next){
        res.redirect('/menu');
    })

.listen(8080)

