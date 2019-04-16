const {Pool} = require('pg');
const pgPool = new Pool({
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
        pgPool.connect(function (err) {
            pgPool.query("SELECT * FROM bombes", function (err, result) {

                    data = result;
                    pgPool.release;
                    if (err) {
                        callback(err);
                    } else {
                        callback(null, data.rows);
                    }
                }

            );
        });

    }

    /**
     * Pour ajouter bombe dans db
     * @param callback
     */

    //Fonctionne

    static ajouterBombe(callback) {
        const query = {
            text: 'INSERT INTO bombes(nom, reaction_chimique, pays, date_explosion, puissance) VALUES($1, $2, $3, $4, $5)',
            values: ['aaa', 'abcdef', 'can', '1999-11-08', '1000'],
        };

        pgPool.connect(function (err) {
            pgPool.query(query, (err, res) => {
                pgPool.release;
                callback(err);
            })
        });
    };


    /**
     * Pour supprimer bombe dans db
     * @param callback
     */

    static supprimerBombe(idBombe, callback) {

        pgPool.connect(function (err) {
            pgPool.query("DELETE FROM bombes WHERE id = ?", idBombe, (err, res) => {
                pgPool.release;
                callback(err);

            })
        });
    };


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