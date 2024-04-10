/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('services')
    .then((exists)=>{
        if(!exists){
            return knex.schema.createTable('services', (table)=>{
                table.increments("service_id").primary();
                table.integer("provider")
            })
        }

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
