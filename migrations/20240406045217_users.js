/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users')
    .then((exists)=>{
        if(!exists){
            return knex.schema.createTable('users', (table)=>{
                table.increments("user_id").primary();
                table.string("username").notNullable();
                table.string("email").notNullable();
                table.string("password").notNullable();
                table.boolean("is_provider").notNullable().defaultTo(false);
                table.boolean("is_employer").notNullable().defaultTo(false);
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now());
            })
        }

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
