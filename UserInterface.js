var express = require('express');

var app = express();

var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
        '<html>'+
        ' <head>'+
        ' <meta charset="utf-8" />'+
        ' <title></title>'+
        '<h2 align="center">Simulateur : Bombes Historiques</h2>'+
        ' </head>'+
        ' <body>'+
        '<div align= "middle">'+
        ' </body>'+
        ' <button name="buttonMap" align="center" style="border-radius: 10px; width:200px; height:50px" float:left> Accéder à la carte</button>'+
        //' <link rel="stylesheet" type="text/css" href="style.css.xsl">'+
        ' <button name="buttonBombsList" align="center" style="border-radius: 10px; width:200px; ' +
        'height:50px" float:left>Voir la liste des bombes</button>'+
        '</div>'+
        '</html>');

    res.end();
});


server.listen(8080);