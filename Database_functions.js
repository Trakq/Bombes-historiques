class InfosDB {
    /**
     * Retourne la liste à utiliser dans la page principale
     * @param callback
     */
    static getBombList(callback) {
        callback(null, [
            {
                name:'test'
            },
            {
                name:'test 2'
            }
        ]);
    }

    /**
     * Retourne nom bombe
     * @param callback
     */
    static getNom(callback) {
        callback(null, [
            {
                name:'Little Boy'
            },
            {
                name:'Fat Man'
            }
        ]);
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