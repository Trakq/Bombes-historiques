

const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'bombes_historiques',
    password: 'Bananes19',
    port: 5432,
});

async function bienvenue() {
    await client.connect();
    const res = await client.query('SELECT $1::text as message', ['Hello world!']);
    console.log(res.rows[0].message); // Hello world!
    await client.end()
}

async function bob() {
    try {
        await bienvenue()
    } catch (e) {
        console.error(e.message)
    }
}

bob();

/*getInfoBombes(3, function() {
    console.log.....
})*/
