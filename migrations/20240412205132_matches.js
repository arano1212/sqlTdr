/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('matches')
    .then((exists)=>{
        if(!exists){
            return knex.schema.createTable('matches', (table)=>{
                table.increments("match_id").primary();
                table.integer("provider_id").unsigned();
                table.integer("employer_id").unsigned()
                table.integer("skill_id").unsigned();
                table.enum("status", ["pending", "accepted", "rejected"]).defaultTo("pending");
                table.foreign("provider_id").references("user_id").inTable("users");
                table.foreign("employer_id").references("user_id").inTable("users");
                table.foreign("skill_id").references("skill_id").inTable("skills");
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
    return knex.schema.dropTableIfExists("matches");
  
};
