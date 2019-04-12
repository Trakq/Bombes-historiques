var assert = require('assert');

const Database_functions = require('../Database_functions');



describe('tests de db', function() {

    it("should get a list of bombs", function(done) {
        Database_functions.getBombList(function (err, data) {
            //console.error(err);
            console.log(data);
            done();
        })
    });

    it("should add a bomb to the db", function(done) {
        if (Array.isArray() && array.length) {
            console.log("array exists and is not empty");
        }
        done();
    });

    it("should delete a bomb from the db", function(done) {
        if (Array.isArray() && array.length) {
            console.log("array exists and is not empty");
        }
        done();
    });
});