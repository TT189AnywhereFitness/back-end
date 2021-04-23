
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_name: "Paula O",
          password: "password",
          token: "205",
          registered: "Yoga",
        },
        {
          user_name: "Kyle A",
          password: "password",
          token: "235",
          registered: "High Intensity Interval Training",
        },

        {
          user_name: "Bob S",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          user_name: "Barb Wilson",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          user_name: "Sasha Harriet",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          user_name: "Steven Q",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          user_name: "Quentin A",
          password: "password",
          registered: "Yoga",
        },
        {
          user_name: "Susie Q",
          password: "password",
          registered: "Aqua Fit",
        },
        {
          user_name: "Gib Q",
          password: "password",
          registered: "Yoga",
        },
        {
          user_name: "Harriet Wilson",
          password: "password",
          registered: "Yoga",
        },
        {
          user_name: "Elise M",
          password: "password",
          registered: "Aqua Fit",
        },
      ]);
    });
};
