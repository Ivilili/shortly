import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';
import personWorking from './assets/images/illustration-working.svg';
import brandRecognitionIcon from './assets/images/icon-brand-recognition.svg';
import customizableIcon from './assets/images/icon-fully-customizable.svg';
import recordsIcon from './assets/images/icon-detailed-records.svg';

function App() {
	return (
		<>
			<Header />
			<section className="main">
				<div className="main__img-wrap">
				<img src={personWorking} className="main_working-img" alt="person working" />
				</div>
				<h1 className="main_title">More than just shorter links</h1>
				<p className="main_txt">
					Build your brand’s recognition and get detailed insights on how your links are performing.
				</p>
				<button className="cta_btn">Get Started</button>
				<form>
					<input type="text" placeholder="Shorten a link here..." />
					<button>Shorten It!</button>
				</form>
			</section>
			<section id="features" className="features-section">
				<h2>Advanced Statistics</h2>
				<p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
				<div className="cards">
				<div className="card">
					<img src={brandRecognitionIcon} alt="brand Recognition Icon" className="card__img" />
					<h3>Brand Recognition</h3>
					<p>
						Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links
						help instil confidence in your content.
					</p>
				</div>
				<div className="card">
					<img src={recordsIcon} alt="records icon" className="card__img" />
					<h3>Detailed Records</h3>
					<p>
						Gain insights into who is clicking your links. Knowing when and where people engage with your
						content helps inform better decisions.
					</p>
				</div>
				<div className="card">
					<img src={customizableIcon} alt="customizable icon" className="card__img"/>
					<h3> Fully Customizable</h3>
					<p>
						Improve brand awareness and content discoverability through customizable links, supercharging
						audience engagement.
					</p>
				</div>
				</div>
			</section>
			<section id="pricing" className="pricing-section">
				<h2 className="pricing-section_title">Boost your links today</h2>
				<button className="cta_btn">Get Started</button>
			</section>
			<Footer />
		</>
	);
}

export default App;
