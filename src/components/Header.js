import logo from '../assets/images/logo.svg';

const Header = ({toggle, onToggleMenu}) => {

	return (
		<header className={`header ${toggle}`}>
			<div className="header__wrapper">	
				<a href="/" className="header__logo">
					<img src={logo} alt="shortly logo" />
				</a>
				<div className={`header__menu ${toggle}`}>
					<nav className="header__nav">
						<a href="#features" className="header__item">Features</a>
						<a href="#pricing" className="header__item">Pricing</a>
						<a href="#resources" className="header__item">Resources</a>
					</nav>
					<div className="header__login">
						<a href="#login" className="header__login-item">
							Login
						</a>
						<a href="#login" className="header__cta">
							Sign Up
						</a>
					</div>
				</div>
				<a id="mobileMenu" href="/" className="header__hamburger" onClick={onToggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</a>
			</div>
		</header>
	);
};

export default Header;
