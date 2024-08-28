import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "@remix-run/react";
import { MdMenu, MdClose } from "react-icons/md";

export default function NavBar() {

    const ref = useRef<HTMLDivElement | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen( prevMenuOpen => !prevMenuOpen);
    }

    useEffect( () => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            // check that ref is not null 
            if (ref && ref.current) {
                // use Node interface
                if (!ref.current.contains(event.target as Node) && menuOpen) {
                setMenuOpen(false);
                }
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    },[ref, menuOpen])

    return (
        <div className="fixed top-0 z-30 w-full max-w-[1240px]">
            <nav className="flex flex-wrap justify-between items-center p-8 h-20">
                <div>
                    <Link to="/" className="flex items-end gap-1">
                        <h1 className="font-averiaSerifLibre text-purplegrey text-xl">PrismLens</h1>
                        <img src={Logo} alt="logo" className="max-w-6 svg" />
                    </Link>
                </div>
                
                <div ref={ref} className="menu-wrapper relative z-50">
                    <button 
                    className="text-purplegrey hover:text-ridercream text-lg"
                    onClick={() => toggleMenu()}
                    >
                        {
                            menuOpen
                            ? 
                                <MdClose className="animate-spin-menu text-2xl"/>
                            :
                                <MdMenu className="animate-spin-menu text-2xl"/>
                        }
                    </button>

                    <div className={`absolute right-0 top-12 ${menuOpen ? 'opacity-1' : 'opacity-0'} transition ease-in-out`}>
                        <ul className="flex flex-col text-right gap-4 font-averiaSerifLibre text-sm text-ridercream">
                        <li className="hover:text-pink">
                                <Link to="/">Home</Link>
                            </li>
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
        </div>
    )
}