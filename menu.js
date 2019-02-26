var express = require('express');

var app = express();



    //BOUT DE CODE ISSU DE https://developers.google.com/maps/documentation/javascript/tutorial, site officiel de Google
    //-------------------------------------------------------------------------------------------------------------------

    /*
    res.send('<!DOCTYPE html>\n' +
        '<html>\n' +
        '  <head>\n' +
        '    <title>Simple Map</title>\n' +
        '    <meta name="viewport" content="initial-scale=1.0">\n' +
        '    <meta charset="utf-8">\n' +
        '    <style>\n' +
        '<span class="metadata-marker" style="display: none;" data-region_tag="css"></span>      /* Always set the map height explicitly to define the size of the div\n' +
        '       * element that contains the map. *//*\n' +
        '      #map {\n' +
        '        height: 100%;\n' +
        '      }\n' +
        '      /* Optional: Makes the sample page fill the window. *//*\n' +
        '      html, body {\n' +
        '        height: 100%;\n' +
        '        margin: 0;\n' +
        '        padding: 0;\n' +
        '      }\n' +
        '    </style>\n' +
        '  </head>\n' +
        '  <body>\n' +
        '<span class="metadata-marker" style="display: none;" data-region_tag="html-body"></span>    <div id="map"></div>\n' +
        '    <script>\n' +
        '<span class="metadata-marker" style="display: none;" data-region_tag="script-body"></span>      var map;\n' +
        '      function initMap() {\n' +
        '        map = new google.maps.Map(document.getElementById(\'map\'), {\n' +
        '          center: {lat: -34.397, lng: 150.644},\n' +
        '          zoom: 8\n' +
        '        });\n' +
        '      }\n' +
        '    </script>\n' +
        '    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBihwcjUOYV5BOj87XhHSbOQY9CdLjesO4&callback=initMap"\n' +
        '    async defer></script>\n' +
        '  </body>\n' +
        '</html>');
    //---------------------------------------------------------------------------------------------------------------------------------------
})*/

app.get('/menu', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send('<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d849077.6862201064!2d-75.31522263718539!3d45.65063484645109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sca!4v1551193307074" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');
})
.get('/mainPage', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send('Bienvenue dans la page principale');
})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Page introuvable !');
});


app.listen(8080);
