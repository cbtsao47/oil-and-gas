
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sites').del()
    .then(function () {
      // Inserts seed entries
      return knex('sites').insert([
        {id: 1, name: 'Hollywood'},
        {id: 2, name: 'Hanamura'},
        {id: 3, name: 'Route66'},
        {id: 4, name: 'Numbani'},
        {id: 5, name: 'Dorado'}
      ]);
    });
};
