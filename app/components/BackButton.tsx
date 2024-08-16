import { useNavigate } from "@remix-run/react";

export default function BackButton() {

    const navigate = useNavigate();

    return (
        <button 
        className="bg-pink p-2 rounded-lg mb-4 mt-4 text-purplegrey hover:bg-ridercream transition ease-in-out"
        onClick={() => navigate(-1)}
        >
            Back
        </button>
    )
}