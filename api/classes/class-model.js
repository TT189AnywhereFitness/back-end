const db = require('../../data/db-config.js');

const get = () => {
	return db('classes as c')
		.join('users as u', 'u.id', 'c.user_id')
		.select('*')
}

const getById = (id) => {
	return db('classes as c')
		.join('users as u', 'u.id', 'c.user_id')
		.where({ id })
		.first();
}

const add = async (newClass) => {
	const newId = await db('classes').insert(newClass);

	return getById(newId);
}

const update = async (id, updatedClass) => {
	const updatedId = await db('classes').where({ id: updatedId }).update(updatedClass)

	return getById(updatedId);
}

module.exports = {
	get,
	getById,
	add,
	update
}