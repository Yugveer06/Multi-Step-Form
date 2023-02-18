import React from "react";

import "./StepContent.scss";

import "./Step2.scss";

import { AnimatePresence, motion as m } from "framer-motion";

const Step2 = ({ step2Data, setStep2Data }) => {
	const plans = [
		{ name: "arcade", price: [9, 90] },
		{ name: "advanced", price: [12, 120] },
		{ name: "pro", price: [15, 150] },
	];

	return (
		<m.div className='stepContent 2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<header>
				<h1 className='title'>Select your plan</h1>
				<span className='subtitle'>You have the option of monthly or yearly billing.</span>
			</header>
			<m.main layout>
				<div className='plans'>
					{plans.map((plan, index) => {
						return (
							<m.div
								className={`plan ${step2Data.planName === plan.name ? "active" : ""}`}
								key={index}
								onClick={() =>
									setStep2Data({
										...step2Data,
										planName: plan.name,
										price: plan.price[step2Data.planType === "monthly" ? 0 : 1],
									})
								}
								layout
							>
								<div className='image'>
									<img src={`./images/icons/icon-${plan.name}.svg`} alt='' />
								</div>
								<div className='description'>
									<div className='name'>{plan.name.substring(0, 1).toUpperCase() + plan.name.substring(1)}</div>
									<div className='price'>
										${plan.price[step2Data.planType === "monthly" ? 0 : 1]}/
										{step2Data.planType === "monthly" ? "mo" : "yr"}
									</div>
									{step2Data.planType === "yearly" && <div className='offer'>2 months free</div>}
								</div>
							</m.div>
						);
					})}
				</div>
				<div className='planType'>
					<span
						className={step2Data.planType === "monthly" ? "active" : ""}
						onClick={() =>
							setStep2Data({
								...step2Data,
								planType: "monthly",
								price:
									step2Data.planName === "arcade"
										? plans[0].price[0]
										: step2Data.planName === "advanced"
										? plans[1].price[0]
										: plans[2].price[0],
							})
						}
					>
						Monthly
					</span>
					<div
						className={`toggle ${step2Data.planType}`}
						onClick={() =>
							setStep2Data({
								...step2Data,
								planType: step2Data.planType === "monthly" ? "yearly" : "monthly",
								price:
									step2Data.planName === "arcade"
										? plans[0].price[step2Data.planType === "monthly" ? 1 : 0]
										: step2Data.planName === "advanced"
										? plans[1].price[step2Data.planType === "monthly" ? 1 : 0]
										: plans[2].price[step2Data.planType === "monthly" ? 1 : 0],
							})
						}
					>
						<div className='circle'></div>
					</div>
					<span
						className={step2Data.planType === "yearly" ? "active" : ""}
						onClick={() =>
							setStep2Data({
								...step2Data,
								planType: "yearly",
								price:
									step2Data.planName === "arcade"
										? plans[0].price[1]
										: step2Data.planName === "advanced"
										? plans[1].price[1]
										: plans[2].price[1],
							})
						}
					>
						Yearly
					</span>
				</div>
			</m.main>
		</m.div>
	);
};

export default Step2;
