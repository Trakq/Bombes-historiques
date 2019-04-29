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
                    pgPool.end();
                    if (err) {
                        callback(err);
                    } else {
                        //console.log(data.rows);
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
/*
    static ajouterBombe(nom, reaction_chimique, pays , date_explosion, puissance, callback) {
        const query = 'INSERT INTO bombes(nom, reaction_chimique, pays, date_explosion, puissance) VALUES($1, $2, $3, $4, $5)';

        pgPool.connect(function (err) {
            pgPool.query(query, [nom, reaction_chimique, pays , date_explosion, puissance], (err, res) => {
                pgPool.release();
                callback(err);
            })
        });
    };*/


    /**
     * Pour supprimer bombe dans db
     * @param callback
     */
/*
    static supprimerBombe(idBombe, callback) {

        pgPool.connect(function (err) {
            pgPool.query("DELETE FROM bombes WHERE id = ?", idBombe, (err, res) => {
                pgPool.release;
                callback(err);

            })
        });
    };*/
}

module.exports = InfosDB;