
exports.up = function(knex) {
    return knex.schema.createTable('users', (user) =>{
        user.increments('id')
        user.string('username')
        user.string('password')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Users')
};
