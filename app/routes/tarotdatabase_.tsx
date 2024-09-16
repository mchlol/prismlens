import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import Database from "~/components/Database";
import Button from "~/components/Button";
import { CardObject } from "~/lib/types";


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

            <Button destination="/">Home</Button>
            

        </section>
    )
}