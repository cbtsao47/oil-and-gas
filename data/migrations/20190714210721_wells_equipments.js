
exports.up = function(knex) {
  return knex.schema.createTable('wells_equipments',table=>{
      table.increments()
      table.integer('well_id').references('id').inTable('wells').notNullable()
      table.integer('equipment_id').references('id').inTable('equipments').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('wells_equipments')
};
