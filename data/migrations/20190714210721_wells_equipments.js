
exports.up = function(knex) {
  return knex.schema.createTable('wells_equipments',table=>{
      table.increments()
      table.integer('well_id').references('id').inTable('wells')
      table.integer('equipment_id').references('id').inTable('equipments')
  })
};

exports.down = function(knex) {
  
};
