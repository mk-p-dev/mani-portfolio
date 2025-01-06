import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary ">
        <a className="font-bold text-black text-3xl" href="#">PORTFOLIO</a>
        <nav className="hidden md:block">
            <ul className="flex text-white text-xl">
                <li className="mr-2 hover:bg-black rounded-full px-[5px] py-2"><a href="/">Home</a></li>
                <li className="mr-2 hover:bg-black rounded-full px-[5px] py-2"><a href="/#about">About</a></li>
                <li className="mr-2 hover:bg-black rounded-full px-[5px] py-2"><a href="/#projects">Projects</a></li>
                <li className="mr-2 hover:bg-black rounded-full px-[5px] py-2"><a href="/#resume">Resume</a></li>
                <li className="mr-2 hover:bg-black rounded-full px-[5px] py-2"><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><HiMenuAlt3 className='text-white' size={'30px'} /></button>
    </header>
}