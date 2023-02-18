import React from "react";

import "./Confirmation.scss";

import { motion as m } from "framer-motion";

const Confirmation = () => {
	return (
		<m.div className='confirmation' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className='image'>
				<img src={`./images/icons/icon-thank-you.svg`} alt='' draggable={false} />
			</div>
			<div className='title'>Thank you!</div>
			<div className='message'>
				Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
				please feel free to email us at support@loremgaming.com
			</div>
		</m.div>
	);
};

export default Confirmation;
