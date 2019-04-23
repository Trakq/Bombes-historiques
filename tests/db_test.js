var assert = require('assert');

const Database_functions = require('../Database_functions');



describe('tests de db', function() {

    it("should get a list of bombs", function(done) {
        Database_functions.getBombList(function (err, data) {
            if (Array.isArray(data) && data.length) {
                console.log("array exists and is not empty");
            }
            done();
        })
    });
});
/*
describe('test ajouterBombe', function() {

    it("should add a bomb to the db", function(done) {
        Database_functions.ajouterBombe('aaa','aaa', 'can','1999-11-08', '1', function (err, data) {
        })
    });
    after(function () {
        Database_functions.supprimerBombe();
    })
});

describe('test supprimerBombe', function() {

    let id = 0;

    before(function () {
        Database_functions.ajouterBombe('aaa','aaa', 'can','1999-11-08', '1',function (err, data) {
            RETURNING id; //erreur
        })
    })

    it("should delete a bomb from the db", function(done) {
        Database_functions.supprimerBombe(function (err, data) {
            done();
            })
    });
});
*/