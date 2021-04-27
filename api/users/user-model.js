// to interact with the user DB from auth router & middleware
const db = require('../../data/db-config')

function get() {
    return db('users').select('user_name','role')
}

function getBy(filter) {
    return db('users').where(filter).orderBy('user_name').first();
}

async function add(newUser) {
    const [user_id] = await db('users').instert(newUser, 'user_id')

    return getById(user_id)
}

function getById(user_id) {
    return db("users").select("user_name", "role", 'password').where({'user_id':user_id})
}

function update(user_id, newdata) {
  return db("users").update(newdata).where({ user_id });
}

function remove(id) {
  return db("users").del().where({ user_id });
}

module.exports = {
    get,
    getBy,
    add,
    getById,
    update,
    remove
};