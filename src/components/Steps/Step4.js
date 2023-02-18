import React from "react";

import "./StepContent.scss";
import "./Step4.scss";

import { motion as m } from "framer-motion";

const Step4 = ({ setActiveStep, step2Data, step3Data, totalPrice }) => {
	return (
		<m.div className='stepContent 4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<header>
				<h1 className='title'>Finishing up</h1>
				<span className='subtitle'>Double-check everything looks OK before confirming.</span>
			</header>
			<main>
				<div className='step4Wrapper'>
					<div className='details'>
						<div className='planInfo'>
							<div className='left'>
								<div className='planNameAndType'>
									{step2Data.planName.substring(0, 1).toUpperCase() + step2Data.planName.substring(1)} (
									{step2Data.planType.substring(0, 1).toUpperCase() + step2Data.planType.substring(1)})
								</div>
								<button
									onClick={() => {
										setActiveStep(2);
									}}
								>
									Change
								</button>
							</div>
							<div className='right'>
								${step2Data.price}/{step2Data.planType === "monthly" ? "mo" : "yr"}
							</div>
						</div>

						<div className='addonInfo'>
							{step3Data.map((addon, id) => {
								if (!addon.checked) return null;
								return (
									<div className='addonList' key={id}>
										<div className='name'>{addon.name}</div>
										<div className='price'>
											+${addon.price[step2Data.planType === "monthly" ? 0 : 1]}/
											{step2Data.planType === "monthly" ? "mo" : "yr"}
										</div>
									</div>
								);
							})}
							{step3Data.every((e) => !e.checked) && (
								<div className='addonList' key='noAddons'>
									<div className='name'>No add-ons</div>
								</div>
							)}
						</div>
					</div>
					<div className='totalPrice'>
						<div className='left'>Total (per {step2Data.planType.slice(0, -2)})</div>
						<div className='right'>
							${totalPrice}/{step2Data.planType === "monthly" ? "mo" : "yr"}
						</div>
					</div>
				</div>
			</main>
		</m.div>
	);
};

export default Step4;
