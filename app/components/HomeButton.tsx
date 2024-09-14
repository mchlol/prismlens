import { Link } from "@remix-run/react";

export default function HomeButton() {
    return (
        <Link to="/">
            <button>Home</button>
        </Link>
    )
}