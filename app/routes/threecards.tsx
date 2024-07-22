import TarotCard from "~/components/TarotCard";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";

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

    console.log(cards[0].name, cards[1].name, cards[2].name);
    
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Past, Present, Future</h2>

            {
                cards 
                ? 
                <div className="flex flex-row flex-wrap place-content-center gap-4">
                 {cards.map(card => <TarotCard key={card.name_short} card={card} />)}
                </div>
                : <p>Unable to retrieve card</p>
            }
            

        </section>
    )
}