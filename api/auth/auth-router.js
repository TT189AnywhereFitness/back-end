const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');
const {checkUsernameAvail, validatePassword, checkUserExists} = require('./auth-middleware.js');
const JWT_SECRET = require('../secrets');


//POST Register a new user
router.post('/register', checkUsernameAvail, validatePassword, (req, res, next) => {
	const newUser = req.body;

	const hash = bcrypt.hashSync(newUser.password, 8);
	newUser.password = hash;
	
	Users.add(newUser)
		.then((createdUser) => {
			const token = generateToken(createdUser);
			res.status(201).json({...createdUser, token});
		})
		.catch(err => next({...err, status: 500}));
});

// !Debug login by creating a new user first.
// !Passwords are stored in plain text so, of course, bcrypt is not working.

//POST login an existing user
router.post('/login', checkUserExists, (req, res, next) => {
  const {user_name, password} = req.body;

	Users.getBy({user_name})
		.then((foundUser) => {
			if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
				const token = generateToken(foundUser);
				res.status(200).json({
					message: `Hey there, ${foundUser.user_name}!`,
					token
				})
			} else {
				res.status(401).json({message: 'Invalid credentials'})
			}
		})
		.catch(err => next({...err, status: 500, message: 'something went wrong'}));
});

const generateToken = (user) => {
	const options = {
		expiresIn: '1 day'
	};

	const payload = {
		subject: user.user_id,
		username: user.user_name,
		role: user.role
	};

	return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;
