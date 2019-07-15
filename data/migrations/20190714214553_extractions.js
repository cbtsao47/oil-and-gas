
exports.up = function(knex) {
  return knex.schema.createTable('extractions',table=>{
      table.increments()
      table.integer('well_id').references('id').inTable('wells')
      table.text("date").notNullable();
      table.integer('oil_amount')
      table.integer('gas_amount')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('extractions')
};
