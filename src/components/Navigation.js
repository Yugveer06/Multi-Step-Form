import React from "react";

import "./Navigation.scss";

import { AnimatePresence, motion as m } from "framer-motion";

const Navigation = ({ activeStep, setActiveStep, step1Data, setIsSubmitted, setShowStep1Errors }) => {
	const handleNext = () => {
		if (activeStep === 1 && (step1Data.name === "" || step1Data.email === "" || step1Data.phone === "")) {
			setShowStep1Errors(true);
			return;
		}
		if (activeStep < 4) {
			setActiveStep((e) => e + 1);
		} else if (activeStep === 4) {
			setActiveStep(4);
			setIsSubmitted(true);
		}
	};
	return (
		<m.div className='buttons' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<AnimatePresence>
				{activeStep > 1 && (
					<m.button
						className='goBack'
						key='goBack'
						initial={{ opacity: 0, x: -120 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0 }}
						onClick={() => setActiveStep((e) => (e === 1 ? 1 : e - 1))}
					>
						Go Back
					</m.button>
				)}
				<button className={activeStep === 4 ? "confirm nextStep" : "nextStep"} key='nextStep' onClick={handleNext}>
					<AnimatePresence mode='wait' initial={false}>
						<m.span
							key={activeStep === 4 ? "confirm" : "nextStep"}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{activeStep === 4 ? "Confirm" : "Next Step"}
						</m.span>
					</AnimatePresence>
				</button>
			</AnimatePresence>
		</m.div>
	);
};

export default Navigation;
