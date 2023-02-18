import React, { useEffect, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import "./Wrapper.scss";

const Wrapper = () => {
	const [activeStep, setActiveStep] = useState(1);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [showStep1Errors, setShowStep1Errors] = useState(false);
	const [step1Data, setStep1Data] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [step2Data, setStep2Data] = useState({
		planName: "arcade",
		planType: "monthly",
		price: 9,
	});

	const [step3Data, setStep3Data] = useState([
		{ name: "Online service", checked: true, price: [1, 10] },
		{ name: "Larger storage", checked: true, price: [2, 20] },
		{ name: "Customizable profile", checked: false, price: [2, 20] },
	]);

	const [totalPrice, setTotalPrice] = useState(step2Data.price);

	useEffect(() => {
		setTotalPrice(step2Data.price);
		let newPrice = 0;
		step3Data.forEach((addon) => {
			newPrice = addon.checked ? newPrice + addon.price[step2Data.planType === "monthly" ? 0 : 1] : newPrice + 0;
		});
		setTotalPrice(step2Data.price + newPrice);
	}, [step2Data, step3Data]);

	return (
		<div className='wrapper'>
			<Sidebar activeStep={activeStep} setActiveStep={setActiveStep} step1Data={step1Data} isSubmitted={isSubmitted} />
			<Content
				activeStep={activeStep}
				setActiveStep={setActiveStep}
				//
				step1Data={step1Data}
				setStep1Data={setStep1Data}
				//
				step2Data={step2Data}
				setStep2Data={setStep2Data}
				//
				step3Data={step3Data}
				setStep3Data={setStep3Data}
				//
				totalPrice={totalPrice}
				isSubmitted={isSubmitted}
				//
				showStep1Errors={showStep1Errors}
				setShowStep1Errors={setShowStep1Errors}
				setIsSubmitted={setIsSubmitted}
			/>
		</div>
	);
};

export default Wrapper;
