exports.up = function (knex) {
	return knex.schema
		.createTable('users', tbl => {
			tbl.increments('user_id');
			tbl.string('user_name');
			tbl.string('password');
			tbl.string('role').notNullable();
		})

		.createTable('classes', tbl => {
			tbl.increments('class_id');
			tbl.string('class_name', 20).unique();
			tbl.string('type', 20);
			tbl.string('start_time');
			tbl.string('duration');
			tbl.string('occasion');
			tbl.string('day');
			tbl.string('intensity', 20);
			tbl.string('location', 20);
			tbl.string('max_size');

			tbl
				.integer('instructor_id')
				.unsigned()
				.references('users.user_id')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		})

		.createTable('user-class', tbl => {
			tbl.increments('id');
			tbl
				.integer('user_id')
				.unsigned()
				.references('users.user_id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

			tbl
				.integer('class_id')
				.unsigned()
				.references('classes.class_id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('user-class')
		.dropTableIfExists('classes')
		.dropTableIfExists('users');
};
