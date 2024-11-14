import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<nav>
			<div className="logoContainer">
				<Link to="/">
					<img
						className="logo"
						src="/Monster_Hunter_World_Logo.png"
						alt="Logo de Monster Hunter Rise"
					/>
				</Link>
			</div>
			<h1>MONSTER RANDOMIZER</h1>
			<div className="logoContainer">
				<Link to="/rise">
					<img
						className="logo"
						src="/Monster_Hunter_Rise_Logo.png"
						alt="Logo de Monster Hunter Rise"
					/>
				</Link>
			</div>
		</nav>
	);
}
export default NavBar;
