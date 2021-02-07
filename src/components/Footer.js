import logo from '../assets/images/logo.svg';

const Footer = () => {
	return (
		<footer id="resources" className="footer">
			<div className="footer__container container">
			<a href="#top" className="footer__logo">
				<img src={logo} alt="shortly logo" />
			</a>
			<ul className="footer__links">
				<li><h4 className="footer__link-title">Features</h4></li>
				<li><a href="#link-shortening" className="footer__link">Link Shortening</a></li>
				<li><a href="#branded-links" className="footer__link">Branded Links</a></li>
				<li><a href="#analytics-links" className="footer__link">Analytics</a></li>
			</ul>
			<ul className="footer__links">
				<li><h4 className="footer__link-title">Resources</h4></li>
				<li><a href="#blog" className="footer__link">Blog</a></li>
				<li><a href="#developers" className="footer__link">Developers</a></li>
				<li><a href="#support" className="footer__link">Support</a></li>
			</ul>
			<ul className="footer__links">
				<li><h4 className="footer__link-title">Company</h4></li>
				<li><a href="#about" className="footer__link">About</a></li>
				<li><a href="#team" className="footer__link">Our Team</a></li>
				<li><a href="#careers" className="footer__link">Careers</a></li>
				<li><a href="#contact" className="footer__link">Contact</a></li>
			</ul>
			<ul className="footer__icons">
				<li><span className="footer__icon icon-facebook2"/></li>
				<li><span className="footer__icon icon-twitter"/></li>
				<li><span className="footer__icon icon-pinterest"/></li>
				<li><span className="footer__icon icon-instagram last"/></li>
			</ul>
			</div>
		</footer>
	);
};

export default Footer;
