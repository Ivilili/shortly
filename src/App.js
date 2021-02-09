import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Result from './components/Result';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.scss';

function App() {
	const [toggle, setToggle] = useState('closed');
	const [value, setValue] = useState('');
	const [data, setData] = useState([]);
	

	const handleChange = (e) => {
		setValue(e.target.value);
	  }

	 const handleSubmit = (e) => {
		e.preventDefault();

		console.log('url submited!')

		fetch(`https://api.shrtco.de/v2/shorten?url=${value}`, {
			responseType: "json",
		})
		.then(res => res.json())
		.then(res => {
			setData([
				...data,
				{ original: value,
				short: res.result.full_short_link
			},
		])
		})
		.catch(err => console.log(err));
	  }
	

	const toggleMenu = (e) => {
		e.preventDefault();
		setToggle(toggle === 'closed' ? 'open' : 'closed');
		console.log('toggled')
	}

	return (
		<>
			<Header toggle={toggle} onToggleMenu={toggleMenu}/>
			<Main />
			<Result data={data} value={value} onChange={handleChange} onSubmit={handleSubmit}/>
			<Features />
			<Pricing/>
			<Footer/>
		</>
	);
}

export default App;
