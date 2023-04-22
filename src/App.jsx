import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

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
		<>
			<div className="text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Intro />
					<Portfolio />
					<Skills />
					<Timeline />
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
