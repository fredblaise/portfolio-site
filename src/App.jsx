import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';
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
			<Routes>
				<Route exact path='/' element={<About />} />
				<Route path='/#/projects' element={<Projects />} />
				<Route path='/#/timeline' element={<Timeline />} />
				<Route path='/#/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
