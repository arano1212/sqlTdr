/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('services')
        .then((exists) => {
            if (!exists) {
                return knex.schema.createTable('services', (table) => {
                    table.increments('id').primary();
                    table.integer('provider_id').unsigned();
                    table.integer('employer_id').unsigned();
                    table.integer('skill_id').unsigned();
                    table.integer('duration_hours');
                    table.enum('status', ['pending', 'in_progress', 'completed']).defaultTo('pending');
                    table.foreign('provider_id').references('user_id').inTable('users');
                    table.foreign('employer_id').references('user_id').inTable('users');
                    table.foreign('skill_id').references('skill_id').inTable('skills');
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
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('services');

};
