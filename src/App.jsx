import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';

function App() {
	// const [theme, setTheme] = useState(null);

	// useEffect(() => {
	// 	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 		setTheme('dark');
	// 	} else {
	// 		setTheme('light');
	// 	}
	// }, []);

	// const handleThemeSwitch = () => {
	// 	setTheme(theme === 'dark' ? 'light' : 'dark');
	// };

	// useEffect(() => {
	// 	if (theme === 'dark') {
	// 		document.documentElement.classList.add('dark');
	// 	} else {
	// 		document.documentElement.classList.remove('dark');
	// 	}
	// }, [theme]);

	return (
		<div className="max-w-5xl w-11/12 m-auto text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/timeline' element={<Timeline />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	)
}

export default App
