
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videogames')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('videogames').insert([
        {name: 'call of duty'},
        {name: 'fallout'},
        {name: 'cuphead'},
      ]);
    });
};
