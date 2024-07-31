import type { LoaderFunctionArgs } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getImgCode } from "~/functions/functions";


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
    const imagePath = `/cards/${getImgCode(card.name_short)}.jpg`;

    console.log('tarotCard: ',card);

    return (
        <section className="max-w-[1000px] mx-auto text-ridercream">
            <h1 className="font-averiaSerifLibre text-3xl text-purplegrey text-center">
                {card.name}
            </h1>

            <div className="grid grid-flow-col-dense p-8">
                <img src={imagePath} alt={card.name} className="max-w-[300px]"/>
                <div className="card-info pl-4 max-w-[75ch]">
                    <h2 className="font-averiaSerifLibre text-3xl mb-3">Rider-Waite Meaning</h2>
                    <h3 className="font-averiaSerifLibre mt-3 mb-3">Upright</h3>
                    <p className="">{card.meaning_up}</p>
                    <h3 className="font-averiaSerifLibre mt-3 mb-3">Reversed</h3>
                    <p className="">{card.meaning_rev}</p>

                    <h2 className="font-averiaSerifLibre text-2xl mt-3 mb-3">Description & Symbolism</h2>
                    <p className="">{card.desc}</p>
                </div>
            </div>
        </section>
    )
}