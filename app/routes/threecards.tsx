import TarotCard from "~/components/TarotCard";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { fetchReport } from "~/functions/functions";
import Reading from "~/components/Reading";

type CardObject = {
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

type LoaderData = {
    cards: Array<CardObject>
}

export let loader: LoaderFunction = async () => {
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=3`);
    const data = await response.json();
    const cards = data.cards; 
    return json<LoaderData>({ cards })
}

export default function ThreeCards() {

    const { cards } = useLoaderData<LoaderData>();
    const [cardData, setCardData] = useState([]);
    const [revealed, setRevealed] = useState<boolean>(false);

    function sendData(cardId: string, flipped: boolean, reversed: boolean) {
        console.log(`Card: ${cardId}, Flipped: ${flipped}, reversed: ${reversed}`);
        // when the card is clicked, the id and statuses are sent back via this function
        // we need to save this in state as an array of objects
        // for three cards we know there will be three so we can use array indexes?
        // ? card positions?
        
    }

    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Past, Present, Future</h2>

            {
                cards 
                ? 
                <div className="cards-wrapper">
                    <h3 className="font-averiaSerifLibre text-lg">Your Cards</h3>

                    <div className="flex flex-row flex-wrap place-content-center gap-4">
                        {cards.map(card => <TarotCard key={card.name_short} card={card} sendData={sendData}/>)}
                    </div>

                    <button 
                    className="border-2 p-2 rounded-lg" 
                    onClick={() => setRevealed(prevRevealed => !prevRevealed)}>
                        {`${revealed ? 'Hide ' : 'Reveal '}`} Report
                     </button>

                </div>
                : <p>Unable to retrieve card</p>
            }

            {
                revealed 
                ? 
                    <Reading readingType={'Past present future'} cards={[cards[0].name, cards[1].name, cards[2].name]}/>
                : 
                    null
            }

            {/* {
                revealed
                ?
                report &&
                <p className="max-w-[800px] mx-auto fade-in-text p-4">{report}</p>
                : null
            } */}

            <Link to="/">
                <button className="border-2 p-2 rounded-lg">Home</button>
            </Link>
            

        </section>
    )
}