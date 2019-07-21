exports.up = function(knex) {
  return knex.schema.createTable("wells", table => {
    table.increments();
    table.string("name", 50);
    table.integer("oil_reserve").defaultTo(0);
    table.integer("gas_reserve").defaultTo(0);
    table
      .integer("site_id")
      .references("id")
      .inTable("sites");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("wells");
};
