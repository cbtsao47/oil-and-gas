
exports.up = function(knex) {
  return knex.schema.createTable('sites',table=>{
      table.increments()
      table.string('name',50).notNullable().unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sites')
};
