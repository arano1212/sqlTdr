/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('skills')
    .then((exists)=>{
        if(!exists){
            return knex.schema.createTable('skills', (table)=>{
                table.increments("skill_id").primary();
                table.string("name").notNullable();
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("create_at").defaultTo(knex.fn.now())
            })

        }

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Skills');
};
