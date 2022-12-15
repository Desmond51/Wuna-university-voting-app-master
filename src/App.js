import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";
import VotePage from "./Pages/VotePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { useState } from "react";

import Navbar from "./components/Navbar";
import AddEditUser from "./Pages/AddEditUser";
import VotingPage from "./Pages/VotingPage";

function App() {
	// const navigate = useNavigate();
	const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

	return (
		<Router>
			<Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
			<Routes>
				<Route path="/" element={<Home isAuth={isAuth} />} />
				<Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
				<Route path="/add" element={<AddEditUser />} />
				<Route path="/update/:id" element={<AddEditUser />} />
				<Route path="/votingpage" element={<VotingPage />} />
				<Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
				<Route path="/votepage" element={<VotePage isAuth={isAuth} />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
