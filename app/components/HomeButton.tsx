import { Link } from "@remix-run/react";

export default function HomeButton() {
    return (
        <Link to="/">
            <button className="bg-pink p-2 rounded-lg mb-4 mt-4 text-purplegrey hover:bg-ridercream transition-all duration-200 ease-in-out">Home</button>
        </Link>
    )
}