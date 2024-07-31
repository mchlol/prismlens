import type { LoaderFunctionArgs } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getImgCode } from "~/functions/functions";
import { Link } from "@remix-run/react";
import StarCircleOutline from "../assets/starcircle-outline.svg";

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

export default function Card() {

    const card = useLoaderData<typeof loader>().cards[0];
    const imagePath = `/cards/${getImgCode(card.name_short)}.jpg`;

    return (
        <section className="max-w-[1000px] mx-auto relative">

            <div className="img-wrapper relative">
                <img src={StarCircleOutline} className="-z-10 absolute -top-32 right-2 opacity-50 svg-cream" alt="" />
                </div>

            <div className="text-purplegrey text-center m-8">
                <span className="text-center font-averiaSerifLibre text-3xl">{card.type === 'major' ? 'Major Arcana' : 'Minor Arcana'}</span>
                <h1 className="font-averiaSerifLibre text-6xl">
                    {card.name}
                </h1>
            </div>

            <div className="grid grid-flow-col-dense p-8 bg-ridercream text-purplegrey border-2 border-purplegrey m-4 mb-8">
                   
                <img src={imagePath} alt={card.name} className="max-w-[300px]"/>

                <div className="card-info pl-4 max-w-[75ch]">

                    <h2 className="font-averiaSerifLibre text-2xl mb-3">Rider-Waite Interpretation</h2>
                    <h3 className="font-averiaSerifLibre mt-3 mb-3">Upright</h3>
                    <p className="">{card.meaning_up}</p>
                    <h3 className="font-averiaSerifLibre mt-3 mb-3">Reversed</h3>
                    <p className="">{card.meaning_rev}</p>

                    <h2 className="font-averiaSerifLibre text-xl mt-3 mb-3">Description & Symbolism</h2>
                    <p className="max-w-[75ch]">{card.desc}</p>

                </div>
            </div>

        <div className="mx-auto text-center mb-8">
            <Link to="/tarotdatabase">
                <button className="bg-pink p-2 rounded-lg mb-4 mt-4 text-purplegrey hover:bg-ridercream transition ease-in-out">Back</button>
            </Link>
        </div>

        </section>
    )
}