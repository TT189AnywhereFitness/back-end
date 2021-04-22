
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex("clients").insert([
        {
          client_name: "Bob S",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          client_name: "Barb Wilson",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          client_name: "Sasha Harriet",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          client_name: "Steven Q",
          password: "password",
          registered: "High Intensity Interval Training",
        },
        {
          client_name: "Quentin A",
          password: "password",
          registered: "Yoga",
        },
        {
          client_name: "Steven Q",
          password: "password",
          registered: "Aqua Fit",
        },
        {
          client_name: "Steven Q",
          password: "password",
          registered: "Yoga",
        },
        {
          client_name: "Barb Wilson",
          password: "password",
          registered: "Yoga",
        },
        {
          client_name: "Elise M",
          password: "password",
          registered: "Aqua Fit",
        },
      ]);
    });
};
