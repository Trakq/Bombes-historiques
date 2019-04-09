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
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('Page introuvable !');
    });

app.listen(8080);



//---------------------------------------------------------------------------------------------------------------------------------------
//Mettre un marqueur lors du click
//-------------------------------------------------------------------------------------------------------------------------------------------------
/*

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Marker Labels</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map.
#map {
    height: 100%;
}
/* Optional: Makes the sample page fill the window.
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
    <script>
// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
    var bangalore = { lat: 12.97, lng: 77.59 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: bangalore
    });



    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker(event.latLng, map);
    });

    // Add a marker at the center of the map.
    addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
</head>
<body>
<div id="map"></div>
    </body>
    </html>*/
