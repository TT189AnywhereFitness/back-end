const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const classRouter = require('./classes/class-router.js');
const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(helmet())
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use('/api/auth', authRouter);
server.use('/api/classes', classRouter);

server.use((err, req, res, next) => {
	// eslint-disable-line
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = server;
