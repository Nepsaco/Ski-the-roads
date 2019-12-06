
exports.up = function(knex) {
    return knex.schema.createTable('favorites', table => {
        table.increments()
        table.integer('user_id')
        table.foreign('user_id').references('id').inTable('users')
        table.integer('mountain_number')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('favorites')
};
