import { useState } from "react"
import logo from "./assets/logo.png"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-[#12110F] fixed top-0 w-full z-20 ">

            <div className="max-w-6xl mx-auto">

                <div className="flex justify-between items-center">

                    <a href="#home">
                        <img src={logo} alt="Logo" className="w-20" />
                    </a>

                    <div>

                        <a href="#home" className="text-white hover:text-purple-600 transition ml-20">Home</a>
                        <a href="#about" className="text-white hover:text-purple-600 transition ml-20">About Me</a>
                        <a href="#skills" className="text-white hover:text-purple-600 transition ml-20">Skills</a>
                        <a href="#projects" className="text-white hover:text-purple-600 transition ml-20">Projects</a>

                    </div>

                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-[#8b5cf6] via-[#d946ef] to-[#f472b6] text-white px-5 py-2 rounded-3xl duration-300 hover:scale-110"
                    >
                        Contact with me
                    </a>

                    <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "X" : "☰"}
                    </button>

                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4">

                    <a href="#home" className="block py-2 text-gray-700 hover:text-purple-600">Home</a>
                    <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600">About Me</a>
                    <a href="#skills" className="block py-2 text-gray-700 hover:text-purple-600">skills</a>
                    <a href="#projects" className="block py-2 text-gray-700 hover:text-purple-600">projects</a>

                </div>
            )}

        </nav>
    )
}

export default Navbar