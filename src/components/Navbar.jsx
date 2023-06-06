import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <div className="mx-auto flex flex-col gap-4 md:flex-row max-w-7xl justify-between p-4">
                <div className="flex justify-between gap-2">
                    <a href="/" className="flex dark:text-white text-4xl [font-family:'Pacifico',cursive;]">
                        FB
                    </a>
                    <button className="flex appearance-none p-1 text-gray-500 md:hidden" onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <nav className={`${menuOpen ? 'flex flex-col' : 'hidden'} md:flex md:flex-row gap-4 font-medium text-gray-800`}>
                    <Link to="/" className="rounded flex items-center ml-auto dark:text-white">About</Link>
                    <Link to="/projects" className="rounded flex items-center ml-auto dark:text-white">Projects</Link>
                    <Link to="/timeline" className="rounded flex items-center ml-auto dark:text-white">Timeline</Link>
                    <Link to="/contact" className="rounded flex items-center ml-auto dark:text-white">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
