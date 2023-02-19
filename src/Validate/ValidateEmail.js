const ValidateEmail = (email) => {
	if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
		return true;
	} else {
		return false;
	}
};

export default ValidateEmail;
