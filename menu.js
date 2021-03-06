var express = require('express');

const InfoDataBase = require('./Database_functions');

var app = express();

app.set('view engine', 'ejs');

app.use('/', express.static('public'));

var paysBombe = [], nomBombe = [], reactionChimiqueBombe = [], dateExplosionBombe = [], puissanceBombe = [];
var i = 0;

//Fonction pour aller chercher infos dans db
InfoDataBase.getBombList(function(err, data) {
    if (err)
    {
        console.error(err);
    }
    data.forEach(function(element)
    {
        nomBombe[i] = element.nom;
        paysBombe[i] = element.pays;
        reactionChimiqueBombe[i] = element.reaction_chimique;
        dateExplosionBombe[i] = element.date_explosion;
        puissanceBombe[i] = element.puissance;
        i++;
    });
});


//Portion de code provenant de https://developers.google.com/maps/documentation/javascript/examples/map-simple
app.get('/mainPage', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('map', {nom: nomBombe, puissance: puissanceBombe});
    //res.sendFile('views/map.html', {root: __dirname});

})

    .get('/menu', function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.render('menu', {name: req.params.name});
       // res.sendFile('views/menu.html', {root: __dirname});
    })

    .get('/bombes', function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.render('bombes', {nom: nomBombe, pays: paysBombe, date: dateExplosionBombe, reaction: reactionChimiqueBombe, puissance: puissanceBombe});
        //res.sendFile('views/bombes.html', {root: __dirname});
    })
    .get('/guide', function(req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.sendFile('views/guide.html', {root: __dirname});
      //  res.render('guide', {name: req.params.name});
    })

    .use(function (req, res, next) {
        res.redirect('/menu');
    });

app.listen(8080);