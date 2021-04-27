exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{
					user_name: 'Paula O',
					role: 'instructor',
					password: 'password',
				},
				{
					user_name: 'Kyle A',
					role: 'instructor',
					password: 'password',
				},

				{
					user_name: 'Bob S',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Barb Wilson',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Sasha Harriet',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Steven Q',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Quentin A',
					role: 'instructor',
					password: 'password',
				},
				{
					user_name: 'Susie Q',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Gib Q',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Harriet Wilson',
					role: 'client',
					password: 'password',
				},
				{
					user_name: 'Elise M',
					role: 'client',
					password: 'password',
				},
			]);
		});
};
