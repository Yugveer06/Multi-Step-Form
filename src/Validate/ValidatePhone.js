const ValidatePhone = (phone) => {
	if (!phone.match(/^\d{10}$/)) {
		return true;
	} else {
		return false;
	}
};

export default ValidatePhone;
