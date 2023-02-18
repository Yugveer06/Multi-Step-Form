import React from "react";
import Navigation from "../Navigation";

import "./StepContent.scss";
import "./Step1.scss";

import { motion as m, AnimatePresence } from "framer-motion";

const Step1 = ({ step1Data, setStep1Data }) => {
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
						{/* <AnimatePresence>
							{step1Data.name === "" && (
								<m.span
									className='name errorMsg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									This field is required
								</m.span>
							)}
						</AnimatePresence> */}
					</div>
					<input
						type='text'
						id='name'
						placeholder='e.g. Stephen King'
						value={step1Data.name}
						onChange={handleInput}
						className={step1Data.name === "" ? "error" : ""}
					/>
				</div>
				<div className='inputGroup'>
					<div className='inputTitle'>
						<label htmlFor='email'>Email Address</label>
						{/* <AnimatePresence>
							{step1Data.email === "" && (
								<m.span
									className='email errorMsg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									This field is required
								</m.span>
							)}
						</AnimatePresence> */}
					</div>
					<input
						type='text'
						id='email'
						placeholder='e.g. stephenking@lorem.com'
						value={step1Data.email}
						onChange={handleInput}
						className={step1Data.email === "" ? "error" : ""}
					/>
				</div>
				<div className='inputGroup'>
					<div className='inputTitle'>
						<label htmlFor='phone'>Phone Number</label>
						{/* <AnimatePresence>
							{step1Data.phone === "" && (
								<m.span
									className='phone errorMsg'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									This field is required
								</m.span>
							)}
						</AnimatePresence> */}
					</div>
					<input
						type='tel'
						id='phone'
						placeholder='e.g. +1 234 567 890'
						value={step1Data.phone}
						onChange={handleInput}
						className={step1Data.phone === "" ? "error" : ""}
					/>
				</div>
			</main>
		</m.div>
	);
};

export default Step1;