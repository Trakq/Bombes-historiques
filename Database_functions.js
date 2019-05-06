
//Pool pour connecter à la db (requests de clients ne fonctionnaient pas pcq trop de demandes en même temps

const {Pool} = require('pg');
const pgPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bombes_historiques',
    password: 'admin',
    port: 5432,
});

class InfosDB {
    /**
     * Retourne la liste à utiliser dans la page principale pour afficher les infos des bombes
     * @param callback
     */
    static getBombList(callback) {
        let data = [];
        pgPool.connect(function (err) {
            pgPool.query("SELECT * FROM bombes ORDER BY id", function (err, result) { //va chercher toutes les infos de la db et les met en ordre de id, car pas en ordre dans pgadmin (raison inconnue)
                    data = result;
                    pgPool.end(); //fermer connection avec db pour éviter problèmes possible avec connection encore ouverte
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

    //Fonctionne, mais nous avons décidé d'abandonner cette fonction et l'autre en dessous. Par contre, celle en dessous ne fonctionne pas completement

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