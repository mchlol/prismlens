import { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg";
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
            if (ref && ref.current) {
                if (!ref.current.contains(event.target as Node) && menuOpen) {
                setMenuOpen(false);
                }
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    },[ref, menuOpen])

    return (
        <div className="w-full max-w-[1240px] mx-auto">
            <nav className="flex flex-wrap justify-between items-center p-4 h-20">
                <div>
                    <Link to="/" className="flex items-start gap-1 ">
                        <h1 className="font-averiaSerifLibre text-ridercream text-xl">PrismLens</h1>
                        <img src={Logo} alt="logo" className="max-w-6 svg-cream" />
                    </Link>
                </div>
                {/* the ref is attached to the menu wrapper */}
                <div ref={ref} className="menu-wrapper relative z-50">
                    <button 
                    className="hover:scale-110"
                    onClick={() => toggleMenu()}
                    >
                        {
                            menuOpen
                            ? 
                                <MdClose className="animate-spin-menu text-2xl"/>
                            :
                                <MdMenu className="text-2xl"/>
                        }
                    </button>

                    <div className={`absolute right-0 top-11 ${menuOpen ? 'opacity-1' : 'opacity-0'} duration-500 transition ease-in-out`}>
                        <ul className="flex flex-col text-right gap-4 font-averiaSerifLibre text-sm text-ridercream bg-blueblack p-4 opacity-90 rounded-xl">
                            <li className="hover:text-pink">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hover:text-pink">
                                <Link to="/readings">Readings</Link>
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