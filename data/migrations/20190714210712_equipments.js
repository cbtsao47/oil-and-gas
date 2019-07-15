
exports.up = function(knex) {
  return knex.schema.createTable('equipments',table=>{
      table.increments();
      table.string('name',50)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('equipments')
};
