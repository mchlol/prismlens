import { Link } from "@remix-run/react";
import { useState } from "react";
import { getImgCode } from "~/functions/functions";

type Props = {
    code: string
    rotate: string
}

export default function DatabasePreviewCard({code, rotate}: Props) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/tarotdatabase/${code}`}>
            <img 
            src={`./cards/${getImgCode(code)}.jpg`} 
            alt='tarot card' 
            className={`db-preview-card transition-all duration-[400ms] max-w-[200px] min-w-[150px] rounded-lg`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                transform: isHovered ? 'none' : `rotate(${rotate})`, 
                transition: 'transform 400ms ease-in-out'
                }}
            />
        </Link>
    )
}