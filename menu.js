var express = require('express');

const InfoDataBase = require('./Database_functions');

var app = express();

app.set('view engine', 'ejs');

app.use('/', express.static('public'));

var paysBombe = [], nomBombe = [], reactionChimiqueBombe = [], dateExplosionBombe = [], puissanceBombe = [];
var i = 0;

InfoDataBase.getBombList(function(err, data)
{
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
    res.render('map', {nom: nomBombe});
    //res.sendFile('views/map.html', {root: __dirname});

    //let fileContent = readfile("views/map.html");


    console.log(fileContent);

    // let formattedForDebugPasMal = JSON.stringify(bombeInfos, null, 4)
    // let dataToSend = fileContent.replace('##############info_content##############', bombeInfos.formatMoiCaBeau())

    //res.send(dataToSend);
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

    .use(function (req, res, next) {
        res.redirect('/menu');
    });

app.listen(8080);