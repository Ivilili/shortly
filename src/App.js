import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.scss';

function App() {
	const [toggle, setToggle] = useState('closed');
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	  }

	 const handleSubmit = (e) => {
		console.log(`A url was submitted: ${value}`);
		e.preventDefault();
	  }
	

	const toggleMenu = (e) => {
		e.preventDefault();
		setToggle(toggle === 'closed' ? 'open' : 'closed');
		console.log('toggled')
	}

	return (
		<>
			<Header toggle={toggle} onToggleMenu={toggleMenu}/>
			<Main  value={value} onChange={handleChange} onSubmit={handleSubmit}/>
			<Features/>
			<Pricing/>
			<Footer/>
		</>
	);
}

export default App;
