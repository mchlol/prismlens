import TarotCard from "~/components/TarotCard";
import { useState, useEffect } from "react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import Reading from "~/components/Reading";

interface CardStatusObj {
    [cardId: string]: {
        flipped: boolean
        reversed: boolean
        name: string
    },
}

// type to hold all the properties returned from the api
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
    const [cardStatus, setCardStatus] = useState<CardStatusObj>({});
    const [allCardsFlipped, setAllCardsFlipped] = useState(false); 

    function sendData(cardId: string, flipped: boolean, reversed: boolean, name: string) {
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
        const hasCards = Object.keys(cardStatus).length === 1;
        const allFlipped = hasCards && Object.values(cardStatus).every(item => item.flipped === true);
        setAllCardsFlipped(allFlipped);
    },[cardStatus]);
    
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2">Yes or No?</h2>

            {
                card && 
                <div className="flex flex-row flex-wrap place-content-center gap-4">
                    <TarotCard card={card} sendData={sendData}/>
                    {
                        allCardsFlipped &&
                        <Reading 
                        readingType="yes or no question"
                        cards={[`${Object.values(cardStatus)[0].name} ${Object.values(cardStatus)[0].reversed ? 'reversed' : 'upright'}`]}
                        />
                    }
                </div>
            }
            

        </section>
    )
}