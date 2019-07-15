
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('equipments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('equipments').insert([
        {id: 1, name: 'extractors'},
        {id: 2, name: 'storage tanks'},
        {id: 3, name: 'office buildings'}
      ]);
    });
};
