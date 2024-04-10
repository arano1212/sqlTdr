/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('skills', function(table) {
        table.renameColumn('create_at', 'created_at');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('skills', function(table) {
        table.renameColumn('created_at', 'create_at');
    });
  
};
