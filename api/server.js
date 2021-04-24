const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const classRouter = require('./classes/class-router.js');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors());

// server.use('/api/auth', Router);
// server.use('/api/users', Router);
server.use('/api/classes', classRouter);

server.use((err, req, res, next) => {
	// eslint-disable-line
	res.status(err.status).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;
