

import { FaGithub, FaLinkedin, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close the menu on mobile after clicking a link
        }
    };

    return (
        <nav className=" shadow-lg ">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex items-center">
                    <h3 className="text-white text-xl font-bold">KA</h3>
                </div>
                <div className="flex items-center md:hidden">
                    {isOpen ? (
                        <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
                    ) : (
                        <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
                    )}
                </div>
                <div className={`hidden md:flex md:flex-grow items-center justify-center gap-8 text-white`}>
                    <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 focus:outline-none">About</button>
                    <button onClick={() => scrollToSection('skills')} className="hover:text-gray-300 focus:outline-none">Skills</button>
                    <button onClick={() => scrollToSection('education')} className="hover:text-gray-300 focus:outline-none">Education</button>
                    <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 focus:outline-none">Contact</button>
                    <a href="https://drive.google.com/file/d/1Zh94Ii4Tf2Gjl8OneXf8fS3ZYdhAiRZH/view?usp=sharing">Resume</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/uiukawser-R"><FaGithub className="text-white text-xl hover:text-gray-300" /></a>
                    <a href="www.linkedin.com/in/kawser-ahmed-38611b230"><FaLinkedin className="text-white text-xl hover:text-gray-300" /></a>
                    <a href=""><FaFacebook className="text-white text-xl hover:text-gray-300" /></a>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-700`}>
                <button onClick={() => scrollToSection('about')} className="block py-3 px-4 text-white focus:outline-none">About</button>
                <button onClick={() => scrollToSection('skills')} className="block py-3 px-4 text-white focus:outline-none">Skills</button>
                <button onClick={() => scrollToSection('education')} className="block py-3 px-4 text-white focus:outline-none">Education</button>
                <button onClick={() => scrollToSection('contact')} className="block py-3 px-4 text-white focus:outline-none">Contact</button>
                <a href="https://drive.google.com/file/d/1Zh94Ii4Tf2Gjl8OneXf8fS3ZYdhAiRZH/view?usp=sharing">Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;


