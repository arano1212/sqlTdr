/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('payments')
    .then((exists)=>{
        if(!exists){
            return knex.schema.createTable("payments", (table)=>{
                table.increments("pay_id").primary();
                table.integer("service_id").unsigned();
                table.decimal("amount", 10,2).notNullable();
                table.timestamp('payment_date').defaultTo(knex.fn.now()); 
                table.foreign('service_id').references('id').inTable('services');
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
    return knex.schema.dropTableIfExists('payments');
  
};
