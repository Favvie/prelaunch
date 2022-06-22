import React from "react";
// import Bread from "../assets/Bread.png";
import Cancel from "../assets/CancelButton.svg";
import WhatsApp from "../assets/whatsapp-fill.svg";
import Twitter from "../assets/twitter.svg";
import Popper from "../assets/popper.svg";

const Popup = ({ open, onClose }) => {
	// const [modal, setModal] = useState(true);
	// const onClick = () => {
	// 	setModal(!modal);
	// };
	if (!open) return null;
	return (
		<>
			{/* {modal && ( */}
			<div className="bg-white max-w-[576px] w-[90%] h-[90%] max-h-[380px] absolute md:top-0 top-[50%]  m-auto left-0 right-0 shadow-lg bottom-0 flex flex-col items-center gap-y-10 font-gordita rounded-[16px]">
				<div
					className="right-0 absolute mt-[17px] mr-[37px] cursor-pointer"
					onClick={onClose}
				>
					<img src={Cancel} alt="" />
				</div>
				<div className="md:text-[40px]  pt-10 before:block before:bg-sardine before:absolute before:left-10 before:w-[40px] before:h-[40px] before:bg-no-repeat after:bg-no-repeat after:block after:bg-bread after:absolute after:right-10 after:w-[40px] after:h-[40px]">
					<img src={Popper} alt="" />
				</div>
				<p className="text-center text-black text-[14px] px-6">
					Thank you for signing up. Expect a mail from us soon!
				</p>
				<p className="font-gordita-medium before:block before:bg-spaghetti before:absolute before:left-10 before:bottom-20 before:w-[40px] before:h-[40px] before:bg-no-repeat after:bg-no-repeat after:block after:bg-egg after:absolute after:right-10 after:bottom-10 after:w-[40px] after:h-[40px]">
					Help us spread the word!
				</p>

				<div className="flex gap-6">
					<div className="rounded-full bg-[#FAFAFA] w-[60px] h-[60px] flex items-center justify-center">
						<a href="https://wa.me/send?text=This%20is%20a%20test%20run">
							<img src={WhatsApp} alt="" />
						</a>
					</div>
					<div className="rounded-full bg-[#FAFAFA] w-[60px] h-[60px] flex items-center justify-center">
						<img src={Twitter} alt="" />
					</div>
				</div>
			</div>
			{/* )} */}
		</>
	);
};

export default Popup;
