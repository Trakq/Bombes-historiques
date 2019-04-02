var express = require('express');

var app = express();

var http = require('http');

var ville = "XxX";

var server = http.createServer(function(req, res) {
    //HtmlFile = ("C:\\Users\\elmis\\Documents\\Cégep de Sherbrooke\\Programmation (projet)\\Bombes-historiques\\views\\BombePopUp.html");
    res.writeHead(200, {"Content-Type": "text/html"});
    res.render('BombePopUp.html', {etage: req.params.etagenum});
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