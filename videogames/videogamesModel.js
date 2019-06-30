const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    //update,
    remove,
    getAll,
    //findById,
};

async function insert(videogame) {
    const [id] = await db('videogames').insert(videogame);
    return db('videogames').where({ id }).first();
}

async function remove(id) {
    return db('videogames')
        .where('id', id)
        .del();
}
 
function getAll() {
    return db('videogames');
}