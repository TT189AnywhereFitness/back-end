// for restricted, credential validation, etc.

const checkUsernameAvail = (req, res, next) => {
	next();
};

const validatePassword = (req, res, next) => {
	next();
};

const checkUserExists = (req, res, next) => {
	next();
};

module.exports = {
	checkUsernameAvail,
	validatePassword,
	checkUserExists,
}