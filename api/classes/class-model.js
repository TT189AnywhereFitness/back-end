const db = require('../../data/db-config.js');

const get = () => {
	return db('classes as c')
		.join('users as u', 'u.id', 'c.user_id')
		.select('*')
}

const findById = (id) => {
	return db('classes as c')
		.join('users as u', 'u.id', 'c.user_id')
		.where({ id })
		.first();
}

const add = async (newClass) => {
	const id = await db('classes').insert(newClass);

	return findById(id);
}

const update = async (id, updatedClass) => {
	const id = await db('classes').where({ id }).update(updatedClass)

	return findById(id);
}

module.exports = {
	get,
	findById,
	add
}