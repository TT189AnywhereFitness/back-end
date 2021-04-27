const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');
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


//POST login an existing user
router.post('/login', (req, res, next) => {
  const {user_name, password} = req.body;

	Users.findBy({username})
		.then((foundUser) => {
			if (foundUser && bcrypt.compareSync(password, foundUser.password)) {
				const token = generateToken(foundUser);
				res.status(200).json({
					message: `Hey there, ${foundUser.user_name}!`,
					token
				})

			}
		})
		.catch(err => next({...err, status: 500}));
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
