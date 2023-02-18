import React from "react";

import { motion as m } from "framer-motion";

const Confirmation = () => {
	return (
		<m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			Confirmation
		</m.div>
	);
};

export default Confirmation;
