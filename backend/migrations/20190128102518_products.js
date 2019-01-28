exports.up = (knex) => {
    return knex.schema.createTable("products", (table) => {
      table.increments();
      table.string("name");
      table.string("description");
      table.string("location");
      table.integer("price");
      table.string("type");
      table.timestamps("created_at");
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable("products");
  };