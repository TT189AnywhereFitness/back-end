exports.up = function (knex) {
  return (
    knex.schema

      // .createTable("roles", (tbl) => {
      //   tbl.increments("role_id");
      //   tbl.string("name", 128).notNullable().unique();
      // })

      .createTable("users", (tbl) => {
        tbl.increments("user_id");
        tbl.string("user_name");
        tbl.string("password");
        tbl.string("token").unique().nullable(); //check with middleware will not need it in login form
        // tbl.string("registered");
        tbl.string("role").notNullable();
        // tbl
        //   .integer("roles")
        //   .unsigned()
        //   .references("roles.role_id")
        //   .onDelete("RESTRICT")
        //   .onUpdate("CASCADE");
      })

      .createTable("classes", (tbl) => {
        tbl.increments("class_id");
        tbl.string("class_name", 20).unique();
        tbl.string("type", 20);
        tbl.string("start_time");
        tbl.string("duration");
        tbl.string("occasion");
        tbl.string("day");
        tbl.string("intensity", 20);
        tbl.string("location", 20);
        tbl.string("registered");
        tbl.string("max_size");

        tbl
          .integer("intructor_id")
          .unsigned()
          .references("users.user_id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })

      .createTable("user-class", (tbl) => {
        tbl.increments("id");
        tbl
          .integer("users")
          .unsigned()
          .references("users.user_id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        tbl
          .integer("classes")
          .unsigned()
          .references("classes.class_id")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user-class")
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
