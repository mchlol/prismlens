import TarotCard from "~/components/TarotCard";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import { useEffect, useState } from "react";
import { fetchReport } from "~/functions/functions";

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
    const [report, setReport] = useState<string | null>('');
    const [error, setError] = useState<string | null>('');
    const [revealed, setRevealed] = useState<boolean>(false);

    const getReport = async () => {
        const cardNames = `For a 'Past, Present, Future' reading: ${cards[0].name}, ${cards[1].name}, ${cards[2].name}`;

        try {
            const result = await fetchReport(cardNames);
            setReport(result);
            setError(null);
        } catch (err: any) {
            setError(err.message);
            setReport('');
        }
    }

    useEffect( () => {
        getReport();
        console.log(report);
    },[cards]);

    
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Past, Present, Future</h2>

            {
                cards 
                ? 
                <div className="cards-wrapper">
                    <h3 className="font-averiaSerifLibre text-lg">Your Cards</h3>

                    <div className="flex flex-row flex-wrap place-content-center gap-4">
                        {cards.map(card => <TarotCard key={card.name_short} card={card} />)}
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
                report &&
                <p className="max-w-[800px] mx-auto fade-in-text p-4">{report}</p>
                : null
            }
            

        </section>
    )
}