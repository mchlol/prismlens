import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import { useEffect, useState } from "react";
import HomeButton from "~/components/HomeButton";
import CardSmall from "~/components/CardSmall";
import DatabaseSection from "~/components/DatabaseSection";

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

    // console.log(cards);

    return (
        <section className="text-center pt-8 pb-8">

            <div>
                <h2 className="uppercase text-4xl font-averiaSerifLibre text-blueblack">Tarot Database</h2>

                <p className="max-w-[50ch] m-4 mx-auto">The Tarot deck is made up of 78 cards; 22 Major Arcana, and 56 Minor Arcana split into four suits of 14 cards each.</p>

                <div className="p-4 bg-[url('/meshgradbg-duo.png')] bg-cover text-ridercream mx-auto">
                    <h3 className="font-averiaSerifLibre text-2xl">Major Arcana</h3>
                    <ul className="flex gap-4 flex-wrap justify-center">
                        {
                            cards.filter(card => card.type === 'major').map(card => <li>
                                <CardSmall key={card.name_short} card={card} />
                                </li>)
                        }
                    </ul>

                    <h3 className="font-averiaSerifLibre text-2xl">Minor Arcana</h3>

                    <DatabaseSection suit="swords" cards={cards.filter(card => card.suit === 'swords')} />

                    <h4 className="font-averiaSerifLibre">Swords</h4>
                    <ul className="flex gap-4 flex-wrap justify-center">
                        {
                            cards.filter(card => card.type === 'minor' && card.suit === 'swords').map(card => <li>
                                <CardSmall key={card.name_short} card={card} />
                                </li>)
                        }
                    </ul>

                    <h4 className="font-averiaSerifLibre">Wands</h4>
                    <ul className="flex gap-4 flex-wrap">
                        {
                            cards.filter(card => card.type === 'minor' && card.suit === 'wands').map(card => <li>
                                <CardSmall key={card.name_short} card={card} />
                                </li>)
                        }
                    </ul>

                    <h4 className="font-averiaSerifLibre">Pentacles</h4>
                    <ul className="flex gap-4 flex-wrap">
                        {
                            cards.filter(card => card.type === 'minor' && card.suit === 'pentacles').map(card => <li>
                                <CardSmall key={card.name_short} card={card} />
                                </li>)
                        }
                    </ul>

                    <h4 className="font-averiaSerifLibre">Cups</h4>
                    <ul className="flex gap-4 flex-wrap">
                        {
                            cards.filter(card => card.type === 'minor' && card.suit === 'cups').map(card => <li>
                                <CardSmall key={card.name_short} card={card} />
                                </li>)
                        }
                    </ul>
                </div>
            </div>

            <HomeButton />
            

        </section>
    )
}