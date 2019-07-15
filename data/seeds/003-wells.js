
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wells').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('wells').insert([
        {id: 1, name: 'Alpha'},
        {id: 2, name: 'Bravo'},
        {id: 3, name: 'Charlie'},
        {id: 4, name: 'Delta'},
        {id: 5, name:'Echo'}
      ]);
    });
};
