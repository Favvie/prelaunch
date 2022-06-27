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
						<a
							href={`https://wa.me/send?text=${`%F0%9F%98%82 %F0%9F%98%82 %F0%9F%98%82`}%0AWhat%20am%20I%20seeing?%0AThis%20crazy%20company%20is%20making%20a%20bet.%0A

They%20bring%20anything%20you%20want%20from%20the%20market%20to%20your%20door%20in%201%20hour.%0ACheck%20them%20out:%20${"https://runamhq.com"}
`}
						>
							<img src={WhatsApp} alt="" />
						</a>
					</div>
					<div className="rounded-full bg-[#FAFAFA] w-[60px] h-[60px] flex items-center justify-center">
						<a
							href={`https://twitter.com/intent/tweet?text=
							Hats%20off%20to%20you%20guys%20that%20are%20ok%20with%20wasting%20time%20in%20traffic%20or%20getting%20touched%20by%20random%20strangers%0A
							Found%20these%20guys%20that%20deliver%20food%20and%20groceries%20from%20the%20market%20to%20your%20house%20in%20minutes.%0A 
							Check%20them%20out:%20${"https://runamhq.com"}`}
						>
							<img src={Twitter} alt="" />
						</a>
					</div>
				</div>
			</div>
			{/* )} */}
		</>
	);
};

export default Popup;
