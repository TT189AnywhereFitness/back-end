exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user-class")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user-class").insert([
        {
          users: 1,
          classes: 1,
        },
      ]);
    });
};
