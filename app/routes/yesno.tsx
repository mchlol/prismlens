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
    card: CardObject
}

export let loader: LoaderFunction = async () => {
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=1`);
    const data = await response.json();
    const card = data.cards[0];
    return json<LoaderData>({ card })
}

export default function YesNo() {

    const { card } = useLoaderData<LoaderData>();
    
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Yes or No?</h2>

            {
                card && <TarotCard card={card}/>
            }
            

        </section>
    )
}