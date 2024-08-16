import { Link } from "@remix-run/react";
import { useState } from "react";
import { getImgCode } from "~/functions/functions";

type Props = {
    code: string
    rotate: string
}

export default function DatabasePreviewCard(props: Props) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link to={`/tarotdatabase/${props.code}`}>
            <img 
            src={`./cards/${getImgCode(props.code)}.jpg`} 
            alt='tarot card' 
            className={`db-preview-card transition-all duration-[400ms] max-w-[200px] min-w-[150px] rounded-lg`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                transform: isHovered ? 'none' : `rotate(${props.rotate})`, 
                transition: 'transform 400ms ease-in-out'
                }}
            />
        </Link>
    )
}