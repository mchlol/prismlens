import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import HomeButton from "~/components/HomeButton";
import Database from "~/components/Database";

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
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards`);
    const data = await response.json();
    const cards = data.cards; 
    return json<LoaderData>({ cards })
}

export default function TarotDatabase() {

    const { cards } = useLoaderData<LoaderData>();

    return (
        <section id="#top" className="text-center pt-8 pb-8 relative">

            <Database cards={cards}/>

            <HomeButton />
            

        </section>
    )
}