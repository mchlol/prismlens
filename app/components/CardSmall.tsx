import { getImgCode } from "~/functions/functions";

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
        <div className="flex flex-col justify-center items-center gap-2 mb-2 max-w-[100px]">
            <img src={imagePath} className="w-full" />
            <p>{card.name === 'Fortitude' ? 'Strength' : card.name}</p>
        </div>
    )
}

export default CardSmall;