const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const Router = require('./routes/index');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors());

server.use('/api/auth', Router);
server.use('/api/users', Router);
server.use('/api/instructors', Router);

server.use((err, req, res, next) => {
	// eslint-disable-line
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;