import Logo from "../assets/logo.svg";
import { Link } from "@remix-run/react";

export default function NavBar() {
    return (
        <nav className="flex flex-wrap justify-between align-middle p-4 pr-8 pl-8 h-16">
            <div>
                <Link to="/" className="flex gap-1">
                    <img src={Logo} alt="logo" className="max-w-6" />
                </Link>
            </div>
            <h1 className="font-averiaSerifLibre">PrismLens</h1>
            <ul className="flex gap-4">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    Resources
                </li>
            </ul>
        </nav> 
    )
}