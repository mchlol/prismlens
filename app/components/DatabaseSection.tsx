
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

export default function DatabaseSection({cards}: Props) {

    console.log(cards);
    // ! create a component for each section that renders the cards 

    return (
        <p>Card</p>
    )
}