import './App.scss';
import logo from './assets/images/logo.svg';

function App() {
	return (
		<>
			<header className="header">
				<div>
					<img src={logo} alt="shortly logo" />
				</div>
				<div>
					<a href="#features" className="features-link">
						Features
					</a>
					<a href="#pricing" className="pricing">
						Pricing
					</a>
					<a href="#resources" className="resources">
						Resources
					</a>
				</div>
				<div>
					<a href="#login" className="login">
						Login
					</a>
					<a href="#login" className="sign-up">
						Sign Up
					</a>
				</div>
			</header>
			<div className="main">
				<h1 className="main_title">More than just shorter links</h1>
				<p className="main_txt">
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button className="main_btn">Get Started</button>
				<form>
					<input type="text" placeholder="Shorten a link here..." />
					<button>Shorten It!</button>
				</form>
			</div>
			<div id="features" className="features-section">
				<h2>Advanced Statistics</h2>
				<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
				<div className="card">
					<img src="" alt="" />
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links
						help instil confidence in your content.
					</p>
				</div>
				<div className="card">
					<img src="" alt="" />
					<h3>Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing when and where people engage with your
						content helps inform better decisions.
					</p>
				</div>
				<div className="card">
					<img src="" alt="" />
					<h3> Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability through customizable links, supercharging
						audience engagement.
					</p>
				</div>
			</div>
			<div id="pricing" className="pricing-section">
				<h2 className="pricing-section_title">Boost your links today</h2>
				<button className="pricing-section_btn">Get Started</button>
			</div>
			<footer className="footer">
				<div>
					<img src={logo} alt="shortly logo" classNamw="footer_logo"/>
				</div>
				<ul>
					<li>
						<h4>Features</h4>
					</li>
					<li>Link Shortening</li>
					<li>Branded Links</li>
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
				<ul>
					<li>
						<span class="icon icon-facebook2" />
					</li>
					<li>
						<span class="icon icon-twitter" />
					</li>
					<li>
						<span class="icon icon-pinterest" />
					</li>
					<li>
						<span class="icon icon-instagram" />
					</li>
				</ul>
			</footer>
		</>
	);
}

export default App;
