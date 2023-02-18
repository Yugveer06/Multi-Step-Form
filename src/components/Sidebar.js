import React, { useEffect } from "react";
import "./Sidebar.scss";

import { motion as m, useTransform } from "framer-motion";

const Sidebar = ({ activeStep, setActiveStep, step1Data, isSubmitted }) => {
	const steps = ["your info", "select plan", "add-ons", "summary"];
	return (
		<div className='sidebar' style={{ pointerEvents: isSubmitted ? "none" : "auto" }}>
			<div className='steps'>
				{steps.map((step, id) => {
					id += 1;
					return (
						<div
							className={`step ${id} ${activeStep === id ? "active" : ""}`}
							key={id}
							onClick={() => setActiveStep(id)}
						>
							<div className='circle'>
								<span>{id}</span>
								{activeStep === id && <m.div className='circleBackground' layoutId='circleBackground'></m.div>}
							</div>
							<div className='stepInfo'>
								<div className='stepNum'>STEP {id}</div>
								<div className='stepName'>{step.toUpperCase()}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
