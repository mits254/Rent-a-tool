exports.up = (knex) => {
    return knex.schema.createTable("products", (table) => {
      table.increments();
      table.integer('user_id').notNullable();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string("location").notNullable();
      table.string("type");
      table.integer("price").notNullable();
      table.string("image");
      table.timestamp("created_at").notNullable().defaultTo(knex.raw('now()'));
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable("products");
  };