import React from "react";
import "./Sidebar.scss";

import { motion as m } from "framer-motion";

const Sidebar = ({ activeStep, setActiveStep, step1Data, isSubmitted }) => {
	const steps = ["your info", "select plan", "add-ons", "summary"];
	return (
		<nav className='sidebar'>
			<m.div className='steps'>
				{steps.map((step, id) => {
					id += 1;
					return (
						<div
							className={`step ${id} ${id === activeStep ? "active" : ""}`}
							key={id}
							onClick={() => setActiveStep(id)}
							style={{
								pointerEvents:
									(id !== 1 && (step1Data.name === "" || step1Data.email === "" || step1Data.phone === "")) ||
									isSubmitted
										? "none"
										: "auto",
							}}
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
			</m.div>
		</nav>
	);
};

export default Sidebar;
