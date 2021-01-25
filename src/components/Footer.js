import logo from '../assets/images/logo.svg';

const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<img src={logo} alt="shortly logo" className="footer_logo" />
			</div>
			<ul>
				<li className="footer__link">
					<h4 className="footer__link-title">Features</h4>
				</li>
				<li>
					<a href="#link-shortening">Link Shortening</a>
				</li>
				<li>
					<a href="#branded-links">Branded Links</a>
				</li>
				<li>Analytics</li>
			</ul>
			<ul>
				<li>
					<h4>Resources</h4>
				</li>
				<li>Blog</li>
				<li>Developers</li>
				<li>Support</li>
			</ul>
			<ul>
				<li>
					<h4>Company</h4>
				</li>
				<li>About</li>
				<li>Our Team</li>
				<li>Careers</li>
				<li>Contact</li>
			</ul>
			<ul className="icons">
				<li>
					<span className="icon icon-facebook2" />
				</li>
				<li>
					<span className="icon icon-twitter" />
				</li>
				<li>
					<span className="icon icon-pinterest" />
				</li>
				<li>
					<span className="icon icon-instagram" />
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
