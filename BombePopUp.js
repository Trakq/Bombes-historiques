var express = require('express');

var app = express();

var http = require('http');

var ville = "XxX";

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
        '<!DOCTYPE html>' +
        '<html>'+
        '<head>' +
        '<title> </title>'+
        '<h2 align="center">Choix de Bombe</h2>'+
        '</head>'+
        '<div align="center">' +
        'Vous avez choisi la ville ' + ville + '' +
        '<p>'+
        'Quelle bombe souhaitez vous utiliser?'+
        '</div>'+
        '<head>' +
        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<style>' +
        '.dropbtn {' +
        '  background-color: #3498DB;' +
        '  color: white;' +
        '  padding: 16px;' +
        '  font-size: 16px;' +
        '  border: none;' +
        '  cursor: pointer;' +
        '}' +
        '' +
        '.dropbtn:hover, .dropbtn:focus {' +
        '  background-color: #2980B9;' +
        '}' +
        '' +
        '.dropdown {' +
        '  position: relative;' +
        '  display: inline-block;' +
        '}' +
        '.dropdown-content {' +
        '  display: none;' +
        '  position: absolute;' +
        '  background-color: #f1f1f1;' +
        '  min-width: 160px;' +
        '  overflow: auto;' +
        '  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);' +
        '  z-index: 1;' +
        '}' +
        '.dropdown-content a {' +
        '  color: black;\n' +
        '  padding: 12px 16px;' +
        '  text-decoration: none;' +
        '  display: block;' +
        '}' +
        '.dropdown a:hover {background-color: #ddd;}' +
        '.show {display: block;}' +
        '</style>' +
        '</head>' +
        '<body>' +
        '<div class="dropdown" align="center">' +
        '  <button onclick="MenuDéroulant()" class="dropbtn">Dropdown</button>' +
        '  <div id="myDropdown" class="dropdown-content" align="center">'  +
        '    <a href="#home">Bombe 1</a>' +
        '    <a href="#about">Bombe 2</a>' +
        '    <a href="#contact">Bombe 3</a>' +
        '  </div>' +
        '</div>' +
        '<script>' +
        //
        //Fonction pour activer le menu
        'function MenuDéroulant() {document.getElementById("myDropdown").classList.toggle("show");}' +
        //
        //'Fermer le menu quand on click a coter' +
        'window.onclick = function(event) {' +
        '  if (!event.target.matches(\'.dropbtn\')) {'+
        '    var dropdowns = document.getElementsByClassName("dropdown-content");' +
        '    var i;' +
        '    for (i = 0; i < dropdowns.length; i++) {' +
        '      var openDropdown = dropdowns[i];' +
        '      if (openDropdown.classList.contains(\'show\')) {' +
        '        openDropdown.classList.remove(\'show\');' +
        '      }' +
        '    }' +
        '  }' +
        '}' +
        '</script>'+
        '</html>');
    res.end();

    /*function MenuDéroulant() {
        document.getElementById("myDropdown").classList.toggle("show");
    }*/

    /*function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }*/

    /*window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }*/
});

server.listen(8080);