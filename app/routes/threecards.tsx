import TarotCard from "~/components/TarotCard";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { fetchReport } from "~/functions/functions";
import Reading from "~/components/Reading";

// defining cardId type like this means the object can have any number of properties matching this shape
interface CardStatusObj {
    [cardId: string]: {
        flipped: boolean
        reversed: boolean
        name: string
    },
}

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
    const [cardStatus, setCardStatus] = useState<CardStatusObj>({});
    const [allCardsFlipped, setAllCardsFlipped] = useState<boolean>(false);

    function sendData(cardId: string, flipped: boolean, reversed: boolean, name: string) {
        // using brackets here means the cardId can be any value
        setCardStatus( (prevCardStatus) => ({
            ...prevCardStatus,
            [cardId]: {
                flipped,
                reversed,
                name
            }
        }));
        
    }

    useEffect( () => {
        // check all cards accounted for otherwise every will return true
        const hasCards = Object.keys(cardStatus).length === 3;
        const allFlipped = hasCards && Object.values(cardStatus).every(item => item.flipped === true);
        setAllCardsFlipped(allFlipped);
    },[cardStatus]);

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
                    

                </div>
                : <p>Unable to retrieve card</p>
            }

            {
                allCardsFlipped 
                ? 

                    <div className="reading-container">
                        <div className="reading-wrapper">
                            {Object.values(cardStatus).map(card => <p>{`${card.name} ${card.reversed ? 'reversed' : 'upright'}`}</p>)}
                            <Reading 
                                readingType={'Past present future'} 
                                cards={
                                    [
                                        `${Object.values(cardStatus)[0].name} ${Object.values(cardStatus)[0].reversed ? 'reversed' : 'upright'}`, 
                                        `${Object.values(cardStatus)[1].name} ${Object.values(cardStatus)[1].reversed ? 'reversed' : 'upright'}`, 
                                        `${Object.values(cardStatus)[2].name} ${Object.values(cardStatus)[2].reversed ? 'reversed' : 'upright'}`
                                ]
                                }
                                />
                        </div>
                    </div>

                : 
                    <p>Flip all the cards to get your reading.</p>
            }

            <Link to="/">
                <button className="border-2 p-2 rounded-lg">Home</button>
            </Link>
            

        </section>
    )
}