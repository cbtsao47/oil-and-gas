
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wells_equipments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('wells_equipments').insert([
        {id: 1, well_id:1,equipment_id:1},
        {id: 2, well_id:2,equipment_id:2},
        {id: 3, well_id:3,equipment_id:3}
      ]);
    });
};
