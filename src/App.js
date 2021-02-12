import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Result from './components/Result';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import uuid from 'react-uuid';
import './App.scss';

function App() {
	const [toggle, setToggle] = useState('closed');
	const [value, setValue] = useState('');
	const [data, setData] = useState(JSON.parse(sessionStorage.getItem('data')) || []);
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
			let myData = [
				...data,
				{ original: value,
				short: res.result.full_short_link,
				id: uuid()
			},
		]
		    setData(myData)
		    sessionStorage.setItem('data', JSON.stringify(myData));
		    setValue("");
		})
		.catch(err => {
			console.log(err)
		    setIsLoading(false);});
	  }
	

	const toggleMenu = (e) => {
		e.preventDefault();
		setToggle(toggle === 'closed' ? 'open' : 'closed');
	}

	return (
		<>
			<Header toggle={toggle} onToggleMenu={toggleMenu}/>
			<Main />
			<Result data={data} value={value} onChange={handleChange} onSubmit={handleSubmit} isLoading={isLoading} error={error} />
			<Features />
			<Pricing/>
			<Footer/>
		</>
	);
}

export default App;
