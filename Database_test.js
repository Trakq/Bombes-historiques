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
        database.connect(function(err) {
            if (err) throw err;
            database.query("SELECT * FROM bombes", function (err, result) {
                if (err) throw err;
                let data = result;
                //callbacker et returner err
            });
        });
    }
}