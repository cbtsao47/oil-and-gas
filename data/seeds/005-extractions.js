exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("extractions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("extractions").insert([
        { id: 1, well_id: 1, date: "7/1/2019", oil_amount: 250, gas_amount: 0 },
        { id: 2, well_id: 1, date: "7/2/2019", oil_amount: 270, gas_amount: 0 },
        { id: 3, well_id: 1, date: "7/3/2019", oil_amount: 170, gas_amount: 0 },
        { id: 4, well_id: 1, date: "7/4/2019", oil_amount: 200, gas_amount: 0 },
        { id: 5, well_id: 1, date: "7/5/2019", oil_amount: 100, gas_amount: 0 },
        { id: 6, well_id: 2, date: "7/1/2019", oil_amount: 250, gas_amount: 0 },
        { id: 7, well_id: 2, date: "7/2/2019", oil_amount: 270, gas_amount: 0 },
        { id: 8, well_id: 2, date: "7/3/2019", oil_amount: 170, gas_amount: 0 },
        { id: 9, well_id: 2, date: "7/4/2019", oil_amount: 200, gas_amount: 0 },
        {
          id: 10,
          well_id: 2,
          date: "7/5/2019",
          oil_amount: 100,
          gas_amount: 0
        },
        {
          id: 11,
          well_id: 3,
          date: "7/1/2019",
          oil_amount: 250,
          gas_amount: 0
        },
        {
          id: 12,
          well_id: 3,
          date: "7/2/2019",
          oil_amount: 270,
          gas_amount: 0
        },
        {
          id: 13,
          well_id: 3,
          date: "7/3/2019",
          oil_amount: 170,
          gas_amount: 0
        },
        {
          id: 14,
          well_id: 3,
          date: "7/4/2019",
          oil_amount: 200,
          gas_amount: 0
        },
        {
          id: 15,
          well_id: 3,
          date: "7/5/2019",
          oil_amount: 100,
          gas_amount: 0
        },
        {
          id: 16,
          well_id: 4,
          date: "7/1/2019",
          oil_amount: 250,
          gas_amount: 0
        },
        {
          id: 17,
          well_id: 4,
          date: "7/2/2019",
          oil_amount: 270,
          gas_amount: 0
        },
        {
          id: 18,
          well_id: 4,
          date: "7/3/2019",
          oil_amount: 170,
          gas_amount: 0
        },
        {
          id: 19,
          well_id: 4,
          date: "7/4/2019",
          oil_amount: 200,
          gas_amount: 0
        },
        {
          id: 20,
          well_id: 4,
          date: "7/5/2019",
          oil_amount: 100,
          gas_amount: 0
        },
        {
          id: 21,
          well_id: 5,
          date: "7/1/2019",
          oil_amount: 250,
          gas_amount: 0
        },
        {
          id: 22,
          well_id: 5,
          date: "7/2/2019",
          oil_amount: 270,
          gas_amount: 0
        },
        {
          id: 23,
          well_id: 5,
          date: "7/3/2019",
          oil_amount: 170,
          gas_amount: 0
        },
        {
          id: 24,
          well_id: 5,
          date: "7/4/2019",
          oil_amount: 200,
          gas_amount: 0
        },
        { id: 25, well_id: 5, date: "7/5/2019", oil_amount: 100, gas_amount: 0 }
      ]);
    });
};
