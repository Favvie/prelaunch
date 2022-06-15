import React, { useState } from "react";
import Logo from "../assets/RunAm.svg";
import Popup from "./Popup";

const Hero = () => {
	const [openModal, setOpenModal] = useState(false);
	const onClick = () => {
		setOpenModal(true);
	};
	return (
		<div className="w-screen sm:bg-cover bg-contain h-screen bg-mobile-bg sm:bg-hero-pattern bg-no-repeat">
			<div className="ml-[5%]">
				<nav className="py-[50px]">
					<img src={Logo} alt="" className="w-[23.4%] md:w-[8.5%]" />
				</nav>

				<div className="mt-[76%] md:mt-0 pb-[10px] md:pb-0">
					<div className="flex flex-col gap-y-[23px] md:w-[50%] my-[4%]">
						<h1 className=" text-4xl md:text-[48px] font-gordita-bold leading-[51px] md:leading-[68px] bg-gradient-to-l from-[rgba(248, 248, 248, 0)]">
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

						<form
							action=""
							className="flex flex-col md:flex-row gap-[10px] mt-1 "
						>
							<input
								type="text"
								placeholder="Enter your email address"
								className="rounded-[6px] px-[20px] h-[50px] w-[90%] max-w-[415px] runam-box-shadow placeholder:text-[12px] placeholder:font-gordita placeholder:text-black	"
							/>
							<input
								type="button"
								value="Notify Me"
								className="rounded-[6px] bg-runam-secondary text-white w-[124px] h-[50px] runam-box-shadow cursor-pointer self-center mt-6 md:mt-0"
								onClick={onClick}
							/>
						</form>
					</div>
				</div>
				<Popup open={openModal} onClose={() => setOpenModal(false)} />
			</div>
		</div>
	);
};

export default Hero;
