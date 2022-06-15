import Hero from "../components/Hero";

import React from "react";
import Popup from "../components/Popup";
// import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div className="relative">
			{/* <Navbar /> */}
			<Hero />
			<Popup />
		</div>
	);
};

export default Home;
