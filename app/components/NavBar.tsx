import Logo from "../assets/logo.svg";
import { Link } from "@remix-run/react";

export default function NavBar() {
    return (
        <nav className="flex justify-between p-4 border-b-2">
            <div>
                <Link to="/" className="flex gap-1">
                    <h1 className="font-averiaSerifLibre">PrismLens</h1>
                    <img src={Logo} alt="logo" className="max-w-4" />
                </Link>
                
            </div>
            <ul className="flex gap-4">
                <li>About</li>
                <li>Resources</li>
            </ul>
        </nav> 
    )
}