const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model.js');


//POST Register a new user
router.post('/register', checkUsernameAvail, validatePassword, (req, res, next) => {
	const newUser = req.body;

	const hash = bcrypt.hashSync(newUser.password, 8);
	newUser.password = hash;
	
	Users.add(newUser)
		.then((createdUser) => res.status(200).json(createdUser))
		.catch(err => next({...err, status: 500}));
});


//POST login an existing user
router.post('/login', (req, res, next) => {
  const {username, password} = req.body;

	Users.findBy({username})
		.then((foundUser) => res.status(200).json(foundUser))
		.catch(err => next({...err, status: 500}));
});


module.exports = router;
