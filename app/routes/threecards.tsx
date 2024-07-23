import TarotCard from "~/components/TarotCard";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json, Link } from "@remix-run/react";
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

// loader puts data into your component on the server before rendering?
export let loader: LoaderFunction = async () => {
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=3`);
    const data = await response.json();
    const cards = data.cards; 
    return json<LoaderData>({ cards })
}

export default function ThreeCards() {

    const { cards } = useLoaderData<LoaderData>();
    const [report, setReport] = useState<string | null>(`Oh darling, you've had quite the shakeup in your past with the Death card. It's not literal death, but let's be real - old habits die hard, and that's what you've had to face. Now, The Chariot, that's you now, Honey. Charging forward at annoyingly slow Wi-Fi speed. And your future, Four of Pentacles? You hold on to things- jobs, relationships, even that ugly sweater nana gave. Pay attention, sweetheart; it's not about clinging, it's about value. What's truly worth your grip? What's worth letting go so you can grab something better? Some food for thought there- you're welcome.`);
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

    function sendData(cardId: string, flipped: boolean, reversed: boolean) {
        console.log(`Card: ${cardId}, Flipped: ${flipped}, reversed: ${reversed}`);
    }

    // useEffect( () => {
    //     getReport();
    //     console.log(report);
    // },[cards]);

    
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Past, Present, Future</h2>

            {
                cards 
                ? 
                <div className="cards-wrapper">
                    <h3 className="font-averiaSerifLibre text-lg">Your Cards</h3>

                    <div className="flex flex-row flex-wrap place-content-center gap-4">
                        {cards.map(card => <TarotCard key={card.name_short} card={card} sendData={sendData}/>)}
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

            <Link to="/">
                <button className="border-2 p-2 rounded-lg">Home</button>
            </Link>
            

        </section>
    )
}