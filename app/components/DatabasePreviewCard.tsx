import { Link } from "@remix-run/react";
import { getImgCode } from "~/functions/functions";

type Props = {
    code: string
    rotate: string
}

export default function DatabasePreviewCard(props: Props) {



    return (
        <Link to={`/tarotdatabase/${props.code}`}>
            <img src={`./cards/${getImgCode(props.code)}.jpg`} alt='tarot card' className={`db-preview-card transition-all duration-[400ms] hover:transform-none max-w-[200px] min-w-[150px] rounded-lg`}
            style={{ transform: `rotate(${props.rotate})` }}/>
        </Link>
    )
}