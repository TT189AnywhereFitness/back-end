exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_name: "Paula O",
          role: "admin",
          password: "password",
          token: "205",
          // registered: "Yoga",
        },
        {
          user_name: "Kyle A",
          role: "admin",
          password: "password",
          token: "235",
          // registered: "High Intensity Interval Training",
        },

        {
          user_name: "Bob S",
          role: "client",
          password: "password",
          // registered: "High Intensity Interval Training",
        },
        {
          user_name: "Barb Wilson",
          role: "client",
          password: "password",
          // registered: "High Intensity Interval Training",
        },
        {
          user_name: "Sasha Harriet",
          role: "client",
          password: "password",
          // registered: "High Intensity Interval Training",
        },
        {
          user_name: "Steven Q",
          role: "client",
          password: "password",
          // registered: "High Intensity Interval Training",
        },
        {
          user_name: "Quentin A",
          role: "client",
          password: "password",
          // registered: "Yoga",
        },
        {
          user_name: "Susie Q",
          role: "client",
          password: "password",
          // registered: "Aqua Fit",
        },
        {
          user_name: "Gib Q",
          role: "client",
          password: "password",
          // registered: "Yoga",
        },
        {
          user_name: "Harriet Wilson",
          role: "client",
          password: "password",
          // registered: "Yoga",
        },
        {
          user_name: "Elise M",
          role: "client",
          password: "password",
          // registered: "Aqua Fit",
        },
      ]);
    });
};
