const mountains = require('../mountain_id')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mountains').del()
    .then(function () {
      // Inserts seed entries
      return knex('mountains').insert(mountains);
    });
};
