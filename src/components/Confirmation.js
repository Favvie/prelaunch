import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "axios";
import Check from "../assets/check.png";
import Failed from "../assets/failed-icon.jpg";

const Confirmation = () => {
	let params = useParams();

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState({ visible: false, title: "" });

	const load = async () => {
		if (!params.email) {
			setError({ visible: true, title: "email not found" });
			return;
		}
		try {
			const response = await axios.patch(
				`https://api.runamhq.com/api/v1/email/confirm/${params.email}`
			);

			await response.data;
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError({ visible: true, title: error.response.data.message });
		}
	};

	useEffect(() => {
		load();
	}, []);

	return (
		<div>
			{loading && (
				<div className="flex h-screen w-screen items-center justify-center">
					<Spinner />
				</div>
			)}
			{!loading && !error.visible ? (
				<div className="home bg-runam-primary">
					<div className="containers w-[90%] text-center max-w-[700px] m-auto flex flex-col justify-center items-center h-[250px] bg-white ">
						<div className="w-[10%]">
							<img src={Check} alt="" className="w-[100%]" />
						</div>
						<h1 className="text-bold">Your verification is complete!</h1>
						<p className="pt-[15px] text-[18px]">
							You will be informed when RunAm launches
						</p>
					</div>
				</div>
			) : (
				<div>
					<div className="home bg-red-400">
						<div className="containers w-[90%] text-center max-w-[700px] m-auto flex flex-col justify-center items-center h-[250px] bg-white ">
							<div className="w-[10%]">
								<img src={Failed} alt="" className="w-[100%]" />
							</div>
							<h1 className="text-bold text-[56px]">{error.title}</h1>

							<button className="border-2 border-solid p-2 rounded-full border-red-400 mt-5">
								<Link to="/">Back to Prelaunch page</Link>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Confirmation;
