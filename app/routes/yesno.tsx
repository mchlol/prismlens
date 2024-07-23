import TarotCard from "~/components/TarotCard";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import { useState } from "react";

// type to hold all the properties returned from the api
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
    card: CardObject
}

export let loader: LoaderFunction = async () => {
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1`);
    const data = await response.json();
    const card = data.cards[0]; // n number of cards already returns an array, even if n is 1
    // * could call a second API here?
    return json<LoaderData>({ card })
}

export default function YesNo() {

    const { card } = useLoaderData<LoaderData>();
    const [allCardsFlipped, setAllCardsFlipped] = useState(false); 
    const [cardsStatus, setCardsStatus] = useState([]);

    function sendData(cardId: string, flipped: boolean, reversed: boolean) {
        console.log(`Card: ${cardId}, Flipped: ${flipped}, reversed: ${reversed}`);
    }
    
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Yes or No?</h2>

            {
                card && 
                <div className="flex flex-row flex-wrap place-content-center gap-4">
                    <TarotCard card={card} sendData={sendData}/>
                </div>
            }
            

        </section>
    )
}