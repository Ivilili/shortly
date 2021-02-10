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
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	

	const handleChange = (e) => {
		setValue(e.target.value);
	  }

	 const handleSubmit = (e) => {
		e.preventDefault();

		(value === "") ? setError(true) : setError(false);
		setIsLoading(true);

		fetch(`https://api.shrtco.de/v2/shorten?url=${value}`, {
			responseType: "json",
		})
		.then(res => res.json())
		.then(res => {
			setIsLoading(false);
			setData([
				...data,
				{ original: value,
				short: res.result.full_short_link
			},
		])
		   //localStorage.setItem('data', data);
		    setValue("");
		})
		.catch(err => {
			console.log(err)
		setIsLoading(false);});
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
			<Result data={data} value={value} onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} error={error}/>
			<Features />
			<Pricing/>
			<Footer/>
		</>
	);
}

export default App;
