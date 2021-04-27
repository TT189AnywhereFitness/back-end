exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user-class")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("user-class").insert([
        {
          user_id: 3,
          class_id: 1,
        },
        {
          user_id: 3,
          class_id: 1,
        },
        {
          user_id: 4,
          class_id: 6,
        },
        {
          user_id: 5,
          class_id: 5,
        },
        {
          user_id: 6,
          class_id: 4,
        },
        {
          user_id: 8,
          class_id: 3,
        },
        {
          user_id: 9,
          class_id: 2,
        },
        {
          user_id: 10,
          class_id: 6,
        },
        {
          user_id: 11,
          class_id: 6,
        },
      ]);
    });
};
