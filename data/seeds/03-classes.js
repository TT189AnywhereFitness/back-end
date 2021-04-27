exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          class_name: "Zumba",
          type: "dance",
          start_time: "12:00 PM",
          occasion: "weekly",
          day: "Friday",
          duration: 60,
          intensity: "low-high",
          location: "online",
          max_size: 32,
        },
        {
          class_name: "Aqua Fit",
          type: "aqua",
          start_time: "2:00 PM",
          occasion: "weekly",
          day: "Tuesday",
          duration: 60,
          intensity: "low",
          location: "near you",
          max_size: 15,
        },
        {
          class_name: "Indoor Cycling",
          type: "cycling",
          start_time: "10:00 AM",
          occasion: "daily",
          day: "everyday",
          duration: 60,
          intensity: "low-high",
          location: "near you",
          max_size: 16,
        },
        {
          class_name: "High Intensity Interval Training",
          type: "hiit",
          start_time: "4:00 PM",
          occasion: "weekly",
          day: "Monday",
          duration: 60,
          intensity: "high",
          location: "near you",
          max_size: 12,
        },
        {
          class_name: "Boot Camp",
          type: "interval",
          start_time: "11:00 AM",
          occasion: "weekly",
          day: "Wednesday",
          duration: 60,
          intensity: "high",
          location: "near you",
          max_size: 16,
        },
        {
          class_name: "Yoga",
          type: "yoga",
          start_time: "6:00 PM",
          occasion: "daily",
          day: "everyday",
          duration: 60,
          intensity: "high",
          location: "near you",
          max_size: 20,
        },
      ]);
    });
};
