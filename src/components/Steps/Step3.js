import React, { useEffect } from "react";

import "./StepContent.scss";
import "./Step3.scss";

import { motion as m } from "framer-motion";

const Step3 = ({ step2Data, step3Data, setStep3Data }) => {
	const addons = [
		{
			title: "Online service",
			description: "Access to multiplayer games",
		},
		{ title: "Larger storage", description: "Extra 1TB of cloud save" },
		{
			title: "Customizable profile",
			description: "Custom theme on your profile",
		},
	];

	return (
		<m.div className='stepContent 3' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<header>
				<h1 className='title'>Pick add-ons</h1>
				<span className='subtitle'>Add-ons help enhance your gaming experience.</span>
			</header>
			<main>
				{addons.map((addon, index) => {
					return (
						<div
							className={`addon ${step3Data[index].checked ? "checked" : ""}`}
							key={index}
							onClick={() => {
								const newData = step3Data.map((currentAddon, id) => {
									if (index === id) {
										currentAddon.checked = !currentAddon.checked;
									}
									return currentAddon;
								});
								setStep3Data(newData);
							}}
						>
							<div className='leftSide'>
								<div className='checkboxWrapper'>
									<div className='checkbox'>
										{step3Data[index].checked && (
											<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
												<m.path
													d='M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
													fill='white'
													stroke='white'
													initial={{ pathLength: 0, strokeWidth: 70, fillOpacity: 0 }}
													animate={{ pathLength: 1, strokeWidth: 0, fillOpacity: 1 }}
													transition={{ duration: 0.6, fillOpacity: { duration: 0.3, delay: 0.15 } }}
												/>
											</svg>
										)}
									</div>
								</div>
								<div className='main'>
									<div className='title'>{addon.title}</div>
									<div className='description'>{addon.description}</div>
								</div>
							</div>
							<div className='price'>
								+${step3Data[index].price[step2Data.planType === "monthly" ? 0 : 1]}/
								{step2Data.planType === "monthly" ? "mo" : "yr"}
							</div>
						</div>
					);
				})}
			</main>
		</m.div>
	);
};

export default Step3;
