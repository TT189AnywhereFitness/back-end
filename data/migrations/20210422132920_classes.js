exports.up = function (knex) {
  return knex.schema

    .createTable("instructors", (tbl) => {
      tbl.increments("instructor_id");
      tbl.string("ins_name", 20).unique();
      tbl.string("password");
      tbl.string("token").unique();
      tbl.string("class_name", 20);
    })
    .createTable("clients", (tbl) => {
      tbl.increments("client_id");
      tbl.string("client_name", 20).unique();
      tbl.string("password");
      tbl.string("registered");
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
      tbl.string("registered")
      tbl.string("max_size");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("classes")
    .dropTableIfExists("clients")
    .dropTableIfExists("instructors");
};
