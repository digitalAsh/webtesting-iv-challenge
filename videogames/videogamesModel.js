const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    //update,
    //remove,
    getAll,
    //findById,
};

async function insert(videogame) {
    const [id] = await db('videogames').insert(videogame);
    return db('videogames').where({ id }).first();
}

function getAll() {
    return db('videogames');
}