exports.up = (knex, Promise) => {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("token").notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.integer("phone").notNullable();
    table.timestamp("created_at").notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("users");
};