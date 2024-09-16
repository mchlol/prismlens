import CardSmall from "./CardSmall"

interface Props {
    suit: string
    cards: Array<{
        desc: string
        meaning_rev: string
        meaning_up: string
        name: string
        name_short: string
        suit: string
        type: string
        value: string
        value_int: number
    }>
}

export default function DatabaseSection({suit, cards}: Props) {

    return (
        <div className="m-4 max-w-[1000px] mx-auto relative">
            <div id={suit} className="db-heading absolute -top-24"></div>
            <h4 className="font-averiaSerifLibre text-xl mb-4">
                {`${suit[0].toUpperCase()}${suit.substring(1)}`}
            </h4>
            
            <ul className="flex gap-4 flex-wrap justify-center mr-8 ml-8">
                {
                    cards.filter(card => card.suit === suit).map(card => 
                    <li key={card.name_short}>
                        <CardSmall card={card} />
                    </li>
                    )
                }
            </ul>
        </div>
    )
}