import React, { useRef } from "react";

import "./StepContent.scss";
import "./Step1.scss";

import { motion as m, AnimatePresence } from "framer-motion";
import ValidateEmail from "../../Validate/ValidateEmail";
import ValidatePhone from "../../Validate/ValidatePhone";

const Step1 = ({ step1Data, setStep1Data, showStep1Errors }) => {
	const nameInput = useRef(null);
	const emailInput = useRef(null);
	const phoneInput = useRef(null);

	const handleInput = (e) => {
		const inputs = { [e.target.id]: e.target.value };
		setStep1Data({ ...step1Data, ...inputs });
	};

	return (
		<m.div className='stepContent 1' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<header>
				<h1 className='title'>Personal info</h1>
				<span className='subtitle'>Please provide your name, email address, and phone number.</span>
			</header>
			<main>
				<div className='inputGroup'>
					<div className='inputTitle'>
						<label htmlFor='name'>Name</label>
						<AnimatePresence>
							{showStep1Errors && step1Data.name === "" && (
								<m.span
									className='name errorMsg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									This field is required
								</m.span>
							)}
						</AnimatePresence>
					</div>
					<input
						type='text'
						id='name'
						ref={nameInput}
						placeholder='e.g. Stephen King'
						value={step1Data.name}
						onChange={handleInput}
						className={showStep1Errors && step1Data.name === "" ? "error" : ""}
					/>
				</div>
				<div className='inputGroup'>
					<div className='inputTitle'>
						<label htmlFor='email'>Email Address</label>
						<AnimatePresence>
							{showStep1Errors && (step1Data.email === "" || ValidateEmail(step1Data.email)) && (
								<m.span
									className='email errorMsg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									{step1Data.email === ""
										? "This field is required"
										: ValidateEmail(step1Data.email)
										? "Invalid email format"
										: ""}
								</m.span>
							)}
						</AnimatePresence>
					</div>
					<input
						type='text'
						id='email'
						ref={emailInput}
						placeholder='e.g. stephenking@lorem.com'
						value={step1Data.email}
						onChange={handleInput}
						className={showStep1Errors && (step1Data.email === "" || ValidateEmail(step1Data.email)) ? "error" : ""}
					/>
				</div>
				<div className='inputGroup'>
					<div className='inputTitle'>
						<label htmlFor='phone'>Phone Number</label>
						<AnimatePresence>
							{showStep1Errors && (step1Data.phone === "" || ValidatePhone(step1Data.phone)) && (
								<m.span
									className='phone errorMsg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									{step1Data.phone === ""
										? "This field is required"
										: ValidatePhone(step1Data.phone)
										? "Invalid phone number"
										: ""}
								</m.span>
							)}
						</AnimatePresence>
					</div>
					<input
						type='tel'
						id='phone'
						ref={phoneInput}
						placeholder='e.g. +1 234 567 890'
						value={step1Data.phone}
						onChange={handleInput}
						className={showStep1Errors && (step1Data.phone === "" || ValidatePhone(step1Data.phone)) ? "error" : ""}
					/>
				</div>
			</main>
		</m.div>
	);
};

export default Step1;
