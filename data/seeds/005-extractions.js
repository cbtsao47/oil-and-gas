
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('extractions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('extractions').insert([
        {id: 1, well_id:1 ,date:'7/1/2019',oil_amount:25 ,gas_amount:0},
        {id: 2, well_id:2 ,date:'7/2/2019',oil_amount:27 ,gas_amount:0},
        {id: 3, well_id:3 ,date:'7/3/2019',oil_amount:17 ,gas_amount:0},
        {id: 4, well_id:4 ,date:'7/4/2019',oil_amount:20 ,gas_amount:0},
        {id: 5, well_id:5 ,date:'7/5/2019',oil_amount:10 ,gas_amount:0},
      ]);
    });
};
