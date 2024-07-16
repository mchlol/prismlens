import Logo from "../assets/logo.svg";
import { Link } from "@remix-run/react";

export default function NavBar() {
    return (
        <nav className="flex flex-wrap justify-between content-center p-4 pr-8 pl-8 h-16">
            <div>
                <Link to="/" className="flex items-end gap-1">
                    <h1 className="font-averiaSerifLibre">PrismLens</h1>
                    <img src={Logo} alt="logo" className="max-w-6" />
                </Link>
            </div>
            
            <ul className="flex gap-4 font-averiaSerifLibre text-sm text-ridergreen">
                <li className="hover:text-rideryellow">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-rideryellow">
                    <Link to="/resources">
                        Resources
                    </Link>
                </li>
            </ul>
        </nav> 
    )
}