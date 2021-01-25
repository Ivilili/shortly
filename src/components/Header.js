import logo from '../assets/images/logo.svg';

const Header = () => {
	return (
		<header className="header">
			<div>
				<img src={logo} alt="shortly logo" />
			</div>
			<nav className="nav">
				<a href="#features" className="nav_features">
					Features
				</a>
				<a href="#pricing" className="nav_pricing">
					Pricing
				</a>
				<a href="#resources" className="nav_resources">
					Resources
				</a>
			</nav>
			<div className="login-wrapper">
				<a href="#login" className="login-wrapper_login">
					Login
				</a>
				<a href="#login" className="login-wrapper_sign-up">
					Sign Up
				</a>
			</div>
		</header>
	);
};

export default Header;
