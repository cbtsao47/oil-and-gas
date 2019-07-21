exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("wells")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("wells").insert([
        {
          id: 1,
          name: "Alpha",
          site_id: 1,
          oil_reserve: 10000,
          gas_reserve: 0
        },
        {
          id: 2,
          name: "Bravo",
          site_id: 1,
          oil_reserve: 25000,
          gas_reserve: 0
        },
        {
          id: 3,
          name: "Charlie",
          site_id: 1,
          oil_reserve: 35000,
          gas_reserve: 0
        },
        {
          id: 4,
          name: "Delta",
          site_id: 1,
          oil_reserve: 15000,
          gas_reserve: 0
        },
        {
          id: 5,
          name: "Echo",
          site_id: 1,
          oil_reserve: 50000,
          gas_reserve: 0
        },
        {
          id: 6,
          name: "Alpha",
          site_id: 2,
          oil_reserve: 0,
          gas_reserve: 10000
        },
        {
          id: 7,
          name: "Bravo",
          site_id: 2,
          oil_reserve: 0,
          gas_reserve: 20000
        },
        {
          id: 8,
          name: "Alpha",
          site_id: 3,
          oil_reserve: 0,
          gas_reserve: 30000
        },
        {
          id: 9,
          name: "Alpha",
          site_id: 4,
          oil_reserve: 0,
          gas_reserve: 15000
        },
        {
          id: 10,
          name: "Bravo",
          site_id: 4,
          oil_reserve: 0,
          gas_reserve: 30000
        },
        {
          id: 11,
          name: "Charlie",
          site_id: 4,
          oil_reserve: 17500,
          gas_reserve: 0
        },
        {
          id: 12,
          name: "Delta",
          site_id: 4,
          oil_reserve: 10000,
          gas_reserve: 0
        },
        {
          id: 13,
          name: "Alpha",
          site_id: 5,
          oil_reserve: 10000,
          gas_reserve: 0
        },
        {
          id: 14,
          name: "Bravo",
          site_id: 5,
          oil_reserve: 35000,
          gas_reserve: 0
        },
        {
          id: 15,
          name: "Charlie",
          site_id: 5,
          oil_reserve: 15000,
          gas_reserve: 0
        },
        {
          id: 16,
          name: "Delta",
          site_id: 5,
          oil_reserve: 50000,
          gas_reserve: 0
        },
        {
          id: 17,
          name: "Echo",
          site_id: 5,
          oil_reserve: 0,
          gas_reserve: 25000
        },
        {
          id: 18,
          name: "Foxtrot",
          site_id: 5,
          oil_reserve: 0,
          gas_reserve: 27500
        }
      ]);
    });
};
