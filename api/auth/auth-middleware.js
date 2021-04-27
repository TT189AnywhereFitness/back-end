// for restricted, credential validation, etc.

const checkUsernameAvail = () => {
	next();
};

const validatePassword = () => {
	next();
};

module.exports = {
	checkUsernameAvail,
	validatePassword,
}