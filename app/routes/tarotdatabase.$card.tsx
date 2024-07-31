import type { LoaderFunctionArgs } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";


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

export let loader: LoaderFunction = async ({params}: LoaderFunctionArgs) => {
    const response = await fetch(`https://tarotapi.dev/api/v1/cards/search?q=${params.card}`);
    const data = await response.json();
    const cards = data.cards; 
    return json<LoaderData>({ cards })
}

// export const loader = async ({
//     params,
// }: LoaderFunctionArgs) => {
//     return json(
//         await fetch(`https://tarotapi.dev/api/v1/cards/search?q=${params.card}`)
//     )
// };

export default function Card() {

    const card = useLoaderData<typeof loader>().cards[0];

    console.log('tarotCard: ',card);

    return (
        <h1>{card.name}</h1>
    )
}