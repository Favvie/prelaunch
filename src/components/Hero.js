import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import axios from "axios";
import validator from "validator";
import Spinner from "./Spinner";

const Hero = () => {
	const [openModal, setOpenModal] = useState(false);
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [loading, setLoading] = useState(false);

	const onClick = (e) => {
		e.preventDefault();
		onSubscribe();
		// setOpenModal(true);
	};

	useEffect(() => {
		// when there is an error, the alert is displayed for 3 seconds
		setTimeout(() => {
			setEmailError("");
		}, 4000);
	}, [emailError]);

	const onSubscribe = async () => {
		if (validator.isEmail(email)) {
			setLoading(true);
			try {
				const response = await axios.post(
					"https://api.runamhq.com/api/v1/email",
					{
						email,
					}
				);
				const data = await response.data;
				if (data.is_subscribed) {
					setOpenModal(true);
				}
				console.log(data);
				setLoading(false);
			} catch (error) {
				// console.error(error.response.data.message);
				setEmailError(error.response.data.message);
				setLoading(false);
			}
		} else {
			setEmailError("Enter valid email address!");
		}
	};

	return (
		<div className="w-screen sm:bg-cover bg-contain h-screen bg-mobile-bg sm:bg-hero-pattern bg-no-repeat">
			<div className="ml-[5%]">
				<nav className="md:py-[50px] py-[40px]">
					<img
						src="/assets/RunAm.svg"
						alt=""
						className="w-[23.4%] md:w-[8.5%]"
					/>
				</nav>

				<div className="mt-[76%] md:mt-0 pb-[10px] md:pb-0">
					<div className="flex flex-col gap-y-[23px] md:w-[50%] my-[4%]">
						<h1 className=" text-4xl md:text-[48px] font-gordita-bold leading-[51px] md:leading-[68px] bg-gradient-to-b  md:bg-none from-[rgba(248,248,248,0.2)]">
							From The <span className="text-runam-secondary">Market</span> To
							Your Doorstep In An Hour
						</h1>
						<p className="w-[95%] md:w-[85%] text-[16px] md:text-[20px] font-gordita my-2">
							<span className="text-runam-primary font-gordita-bold">
								RunAm
							</span>{" "}
							is changing the way Nigerians stock up and buy foodstuff . At
							mouthwatering prices, from vendors you trust and without the
							stress.
						</p>

						<p className="font-gordita-medium  text-[14px] md:text-[20px] md:mt-14">
							Be the first to know when we're in your area!
						</p>

						{emailError && (
							<span className="text-red-700 inline-block">{emailError}</span>
						)}
						<form
							action=""
							className={`flex flex-col md:flex-row ${
								loading ? "space-x-[50px]" : "space-x-[10px]"
							} mt-1  items-center`}
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email address"
								className={
									emailError
										? "input border-solid border-2 border-red-500"
										: "input"
								}
							/>
							{!loading && (
								<button
									onClick={onClick}
									className="rounded-[6px] bg-runam-secondary text-white w-[124px] h-[50px] runam-box-shadow cursor-pointer self-center mt-6 md:mt-0"
								>
									Notify Me
								</button>
							)}
							{loading && <Spinner />}
						</form>
					</div>
				</div>
				<Popup open={openModal} onClose={() => setOpenModal(false)} />
			</div>
		</div>
	);
};

export default Hero;
