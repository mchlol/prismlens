import { useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function BackButton() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function handleClick() {
        setLoading(true);
        setTimeout( () => {
            navigate(-1);
        },500);
    }

    return (
        <button 
        className="bg-pink p-2 rounded-lg mb-4 mt-4 text-purplegrey hover:bg-ridercream transition ease-in-out relative"
        onClick={handleClick}
        >
            {loading
            ? <span className="absolute top-2 right-0 left-0 mx-auto animate-spin">★</span>
            : null}
            <span className={loading ? 'text-transparent text-ridercream' : ''}>Back</span>
        </button>
    )
}