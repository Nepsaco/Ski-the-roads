
exports.up = function(knex) {
    return knex.schema.createTable('mountains', (table) => {
        table.increments('id')
        table.string('mountain_id')
        table.string('name')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('mountains')
  
};
