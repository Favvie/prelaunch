import Home from "./pages/Home";
import Confirmation from "./components/Confirmation";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App h-screen">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="verification/:email" element={<Confirmation />} />
			</Routes>
		</div>
	);
}

export default App;
