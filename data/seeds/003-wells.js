exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("wells")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("wells").insert([
        { id: 1, name: "Alpha", site_id: 1 },
        { id: 2, name: "Bravo", site_id: 2 },
        { id: 3, name: "Charlie", site_id: 3 },
        { id: 4, name: "Delta", site_id: 4 },
        { id: 5, name: "Echo", site_id: 5 },
        { id: 6, name: "Alpha", site_id: 1 },
        { id: 7, name: "Bravo", site_id: 2 },
        { id: 8, name: "Charlie", site_id: 3 },
        { id: 9, name: "Delta", site_id: 4 },
        { id: 10, name: "Echo", site_id: 5 }
      ]);
    });
};
