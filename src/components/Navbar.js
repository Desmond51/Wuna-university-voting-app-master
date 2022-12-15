import { signOut } from "firebase/auth";
import { auth } from "../backend/firebase";
import { Link } from "react-router-dom";

function Navbar({ isAuth, setIsAuth }) {
	const signUserOut = () => {
		signOut(auth).then(() => {
			localStorage.clear();
			setIsAuth(false);
			window.location.pathname = "/login";
		});
	};
	return (
		<nav
			className="navbar navbar-expand-lg text-success navbar-light "
			style={{ backgroundColor: "rgb(119, 145, 161)" }}
		>
			<div className="container-fluid" style={{ color: "#f3aa92" }}>
				<h2 className="ms-5">
					W<span style={{ color: "#5c616e" }}>u</span>
					<span style={{ color: "#f3aa92" }}>n</span>
					<span style={{ color: "#fefefe" }}>a</span>
				</h2>
				{/* <a className="navbar-brand ms-5 fw-bold" href="#s"><img style={{height:"55px", width:"100px"}} src={wunalogo1} className="img-fluid" alt="img" />
</a> */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse " id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto me-5 fw-bold">
						<li className="nav-item ">
							<Link className="nav-link text-reset" aria-current="page" to="/">
								{" "}
								Home{" "}
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-reset"
								aria-current="page"
								to="/votepage"
							>
								{" "}
								Vote{" "}
							</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link text-reset" href="#s">
								News/Update
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-reset"
								href="#s"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Programs
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarScrollingDropdown"
							>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Engineering
									</a>
								</li>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Nursing
									</a>
								</li>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Business
									</a>
								</li>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Law
									</a>
								</li>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Medical Laboratory
									</a>
								</li>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Arts and Craft
									</a>
								</li>
								<li>
									<a className="dropdown-item text-reset" href="#s">
										Music
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link text-reset"
								aria-current="page"
								to="/about"
							>
								{" "}
								About{" "}
							</Link>
						</li>
						<li className="nav-item ">
							<Link
								className="nav-link text-reset"
								aria-current="page"
								to="/contact"
							>
								{" "}
								Contact Us{" "}
							</Link>
						</li>
					</ul>
				</div>

				{!isAuth ? (
					<Link
						className="btn btn-outline-success me-4 border border-2 rounded-pill text-reset"
						to="/login"
					>
						Login
					</Link>
				) : (
					<>
						<Link
							className="mx-4 btn btn-outline-success border border-2 rounded-pill text-reset"
							style={{ backgroundColor: "rgb(119, 145, 161)" }}
							to="/add"
						>
						
							Create Post
						</Link>
						<button
							className="btn btn-outline-success border border-2 rounded-pill text-reset"
							style={{ backgroundColor: "rgb(119, 145, 161)" }}
							onClick={signUserOut}
						>
							{" "}
							Log Out
						</button>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
