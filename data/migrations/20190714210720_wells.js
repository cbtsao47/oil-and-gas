
exports.up = function(knex) {
  return knex.schema.createTable('wells',table=>{
      table.increments()
      table.string('name',50)
      table.text('equipments_required')
      table.integer('oil_reserve').defaultTo(0)
      table.integer('gas_reserve').defaultTo(0)
  })
};

exports.down = function(knex) {
  
};
