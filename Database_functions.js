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
            database.query("SELECT * FROM bombes", function (err, result) {
                data = result;
                console.log(data);
                if (err) {
                    console.log(err.stack)
                } else {
                    console.log(data)
                }
            });
        });
        database.connection.close();
    }

/**
     * Pour ajouter bombe dans db
     * @param callback
     */

     //Fonctionne
    /*
    static ajouterBombe(callback) {
        const query = {
            text: 'INSERT INTO bombes(nom, reaction_chimique, pays, date_explosion, puissance) VALUES($1, $2, $3, $4, $5)',
            values: ['aaa', 'abcdef', 'can', '1999-11-08', '1000'],
        };

        database.connect(function(err) {
            database.query(query, (err, res) => {
                if (err) {
                    console.log(err.stack)
                } else {
                    console.log(res.rows[0])
                }

            })
            });
        database.connection.close();
    };*/


    /**
     * Pour supprimer bombe dans db
     * @param callback
     */

    /*static supprimerBombe(idBombe, callback) {

        database.connect(function(err) {
            database.query("DELETE FROM bombes WHERE id = ?", idBombe, (err, res) => {
                if (err) {
                    console.log(err.stack)
                } else {
                    console.log()
                }
            })
        });
        database.connection.close();
    };*/



    /*static supprimerBombe(callback) {
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