const db = require('../../data/db-config.js');

const get = () => {
	return db('classes as c')
		.join('users as u', 'u.user_id', 'c.instructor_id')
		.select(
			'c.class_id',
			'c.class_name',
			'c.type',
			'c.start_time',
			'c.duration',
			'c.occasion',
			'c.day',
			'c.intensity',
			'c.location',
			'c.max_size',
			'u.user_name as instructor'
		);
};

const getById = id => {
	return db('classes as c')
		.join('users as u', 'u.user_id', 'c.instructor_id')
		.where({ class_id: id })
		.select(
			'c.class_id',
			'c.class_name',
			'c.type',
			'c.start_time',
			'c.duration',
			'c.occasion',
			'c.day',
			'c.intensity',
			'c.location',
			'c.max_size',
			'u.user_name as instructor')
		.first();
};

const add = async newClass => {
	const newId = await db('classes').insert(newClass);

	return getById(newId);
};

const update = async (id, updatedClass) => {
	await db('classes').where({ class_id: id }).update(updatedClass);

	return getById(id);
};

module.exports = {
	get,
	getById,
	add,
	update,
};
