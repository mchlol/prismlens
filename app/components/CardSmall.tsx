import { getImgCode } from "~/functions/functions";
import { Link } from "@remix-run/react";

interface TarotCardProps {
    card: {
        desc: string
        meaning_rev: string
        meaning_up: string
        name: string
        name_short: string
        suit: string
        type: string
        value: string
        value_int: number
    }
}

const CardSmall = ({card}: TarotCardProps) => {

    const imagePath = `/cards/${getImgCode(card.name_short)}.jpg`;

    return (
        <Link to={`./${card.name}`} className="flex flex-col justify-center items-center gap-2 mb-2 max-w-[120px] hover:scale-[1.03] transition ease-in-out">
            <img src={imagePath} className="w-full" />
            <p>{card.name === 'Fortitude' ? 'Strength' : card.name === 'The Last Judgment' ? 'Judgement' : card.name}</p>
        </Link>
    )
}

export default CardSmall;