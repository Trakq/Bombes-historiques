const { Client } = require('pg');
const database = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'bombes_historiques',
    password: 'Bananes19',
    port: 5432,
});

class InfosDB {
    /**
     * Retourne la liste à utiliser dans la page principale
     * @param callback
     */
    static getBombList(callback) {
        let data = [];
        database.connect(function(err) {
            if (err) throw err;
            database.query("SELECT * FROM bombes", function (err, result) {
                if (err) throw err;
                data = result;
                console.log(data);
                //callbacker et returner err
            });
        });
    }

/**
     * Pour ajouter bombe dans db
     * @param callback
     *//*
    static ajouterBombe(callback) {
        callback(null, [
            {
                date:'1945-08-06'
            },
            {
                pays:'1945-08-09'
            }
        ]);
    }
*/

    /**
     * Pour supprimer bombe dans db
     * @param callback
     */
    /*
    static supprimerBombe(callback) {
        callback(null, [
            {
                date:'1945-08-06'
            },
            {
                pays:'1945-08-09'
            }
        ]);
    }
    */

    /**
     * Pour modifier bombe dans db
     * @param callback
     */
    /*
    static modifierBombe(callback) {
        callback(null, [
            {
                date:'1945-08-06'
            },
            {
                pays:'1945-08-09'
            }
        ]);
    }
    */
}

module.exports = InfosDB;