exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("instructors")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("instructors").insert([
        {
          ins_name: "Paula O",
          password: "password",
          token: "205",
          class_name: "Yoga",
        },
        {
          ins_name: "Kyle A",
          password: "password",
          token: "235",
          class_name: "High Intensity Interval Training",
        },
      ]);
    });
};
