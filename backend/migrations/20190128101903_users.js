exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
      table.increments();
      table.string("username");
      table.string("token");
      table.string("password_digest");
      table.string("address");
      table.string("city");
      table.string("state");
      table.integer("phone");
      table.timestamps("created_at");
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable("users");
  };