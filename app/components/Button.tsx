import { useNavigate } from "@remix-run/react";
import { useState } from "react";

type Props = {
    destination: string
    children: string
}

export default function Button({destination, children}: Props) {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function handleClick() {
        setLoading(true);
        // delay navigation so animation can start
        setTimeout( () => {
            destination === 'back' 
            ? navigate(-1)
            : navigate(destination)
        },500);
    }

    return (
        <button className="relative" onClick={handleClick}
        >
            {loading
            ? <span className="absolute top-2 right-0 left-0 mx-auto animate-spin">★</span>
            : null}
            <span className={loading ? 'text-transparent text-ridercream' : ''}>{children}</span>
        </button>
    )
}