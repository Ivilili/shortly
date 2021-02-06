import brandRecognitionIcon from '../assets/images/icon-brand-recognition.svg';
import customizableIcon from '../assets/images/icon-fully-customizable.svg';
import recordsIcon from '../assets/images/icon-detailed-records.svg';

const Features = () => {
	return (
        <section id="features" className="features">
        <div className="features__container container">
        <h2 className="features__title">Advanced Statistics</h2>
        <p className="features__txt">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <div className="features__cards">
        <div className="features__card card1">
            <img src={brandRecognitionIcon} alt="brand Recognition Icon" className="card__img" />
            <h3>Brand Recognition</h3>
            <p>
                Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links
                help instil confidence in your content.
            </p>
        </div>
        <div className="features__card card2">
            <img src={recordsIcon} alt="records icon" className="card__img" />
            <h3>Detailed Records</h3>
            <p>
                Gain insights into who is clicking your links. Knowing when and where people engage with your
                content helps inform better decisions.
            </p>
        </div>
        <div className="features__card card3">
            <img src={customizableIcon} alt="customizable icon" className="card__img"/>
            <h3> Fully Customizable</h3>
            <p>
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </p>
        </div>
        </div>
        </div>
    </section>
	);
};

export default Features;