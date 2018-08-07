
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coffeetype', (table) => {
    table.increments('id'),
    table.string('name'),
    table.string('roaster'),
    table.integer('aroma')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('coffeetype');
};
