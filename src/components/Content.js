import React from "react";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2.js";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

import "./Content.scss";
import { AnimatePresence, motion as m } from "framer-motion";
import Navigation from "./Navigation";
import Confirmation from "./Confirmation";

const Content = ({
	activeStep,
	setActiveStep,
	step1Data,
	setStep1Data,
	step2Data,
	setStep2Data,
	step3Data,
	setStep3Data,
	totalPrice,
	isSubmitted,
	setIsSubmitted,
	showStep1Errors,
	setShowStep1Errors,
}) => {
	return (
		<m.div className='contentWrapper'>
			<m.div className='content' layout>
				<AnimatePresence initial={false} mode='wait'>
					{!isSubmitted && activeStep === 1 && (
						<Step1 key='step1' showStep1Errors={showStep1Errors} step1Data={step1Data} setStep1Data={setStep1Data} />
					)}
					{!isSubmitted && activeStep === 2 && <Step2 key='step2' step2Data={step2Data} setStep2Data={setStep2Data} />}
					{!isSubmitted && activeStep === 3 && (
						<Step3 key='step3' step2Data={step2Data} step3Data={step3Data} setStep3Data={setStep3Data} />
					)}
					{!isSubmitted && activeStep === 4 && (
						<Step4
							key='step4'
							step2Data={step2Data}
							step3Data={step3Data}
							totalPrice={totalPrice}
							setActiveStep={setActiveStep}
						/>
					)}
					{isSubmitted && <Confirmation />}
				</AnimatePresence>
			</m.div>
			<AnimatePresence initial={false}>
				{!isSubmitted && (
					<Navigation
						activeStep={activeStep}
						setActiveStep={setActiveStep}
						step1Data={step1Data}
						setIsSubmitted={setIsSubmitted}
						setShowStep1Errors={setShowStep1Errors}
					/>
				)}
			</AnimatePresence>
		</m.div>
	);
};

export default Content;
