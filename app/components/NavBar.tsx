import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "@remix-run/react";
import { MdMenu, MdClose } from "react-icons/md";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen( prevMenuOpen => !prevMenuOpen);
    }

    return (
        <nav className="flex flex-wrap justify-between content-center p-8 h-20">
            <div>
                <Link to="/" className="flex items-end gap-1">
                    <h1 className="font-averiaSerifLibre text-purplegrey">PrismLens</h1>
                    <img src={Logo} alt="logo" className="max-w-6 svg" />
                </Link>
            </div>
            
            <div className="menu-wrapper relative z-50">
                <button 
                className="text-purplegrey hover:text-ridercream text-xl"
                onClick={() => toggleMenu()}
                >
                    {
                        menuOpen
                        ? 
                            <MdClose className="animate-spin-menu"/>
                        :
                            <MdMenu className="animate-spin-menu"/>
                    }
                    </button>
                <div className={`absolute right-0 top-12 ${menuOpen ? 'opacity-1' : 'opacity-0'} transition ease-in-out`}>
                    <ul className="flex flex-col text-right gap-4 font-averiaSerifLibre text-sm text-ridercream">
                        <li className="hover:text-pink">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:text-pink">
                            <Link to="/tarotdatabase">
                                Tarot Database
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    )
}