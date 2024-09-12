import TarotCard from "~/components/TarotCard";
import { useState, useEffect } from "react";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, json, useParams } from "@remix-run/react";
import Reading from "~/components/Reading";
import BackButton from "~/components/BackButton";
import HomeButton from "~/components/HomeButton";

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
    cards: Array<CardObject>
}

export let loader: LoaderFunction = async ({params}: LoaderFunctionArgs) => {
    console.log(params);
    let numOfCards = 0;
    if (params.type === 'yesno') {
        numOfCards = 1;
    } else {
        numOfCards = 3;
    }
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=${numOfCards}`);
    const data = await response.json();
    const cards = data.cards;
    return json<LoaderData>({ cards })
}

export default function GetTarotCards() {

    const params = useParams();
    console.log('params',params);
    let numOfCards = 0;
    if (params.type === 'yesno') {
        numOfCards = 1;
    } else if (params.type === 'pastpresentfuture') {
        numOfCards = 3;
    } else {
        console.log('No cards available.')
    }

    const { cards } = useLoaderData<LoaderData>();
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
        const hasCards = Object.keys(cardStatus).length === numOfCards;
        const allFlipped = hasCards && Object.values(cardStatus).every(item => item.flipped === true);
        setAllCardsFlipped(allFlipped);
    },[cardStatus]);
    
    if (params.type === 'yesno') {
    return (
        <section className="text-center">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2 text-purplegrey">Yes or No?</h2>
            {
                !allCardsFlipped 
                && 
                <div>
                    <h3 className="font-averiaSerifLibre text-xl     text-purplegrey">Struggling with a decision?</h3>
                    <p>Think about your question, then flip the card.</p>
                </div>
            }

            {
                cards && 
                <div className="flex flex-col flex-wrap items-center justify-center gap-4 text-ridercream">
                    <TarotCard card={cards[0]} sendData={sendData}/>
                    {
                        allCardsFlipped &&
                        <Reading 
                        readingType="yes or no question"
                        cards={[`${Object.values(cardStatus)[0].name} ${Object.values(cardStatus)[0].reversed ? 'reversed' : 'upright'}`]}
                        />
                    }
                </div>
            }

            <BackButton />
            

        </section>
    )
} else if (params.type === "pastpresentfuture") {
    return (
        <section className="text-center pt-8 pb-8">
            <h2 className="uppercase text-4xl font-averiaSerifLibre text-purplegrey">Past, Present, Future</h2>
            <div className="mx-auto mb-4 w-2/3">
                    <h3 className="font-averiaSerifLibre text-xl text-purplegrey">Gain insight into the energies and events shaping your life journey.</h3>
                    <p>Reflect on past influences, understand current situations, and explore potential future outcomes.</p>
                </div>

            {
                cards 
                ? 
                <div className="cards-wrapper">
                    <h3 className="font-averiaSerifLibre text-lg text-ridercream">Your Cards</h3>

                    <div className="flex flex-row flex-wrap place-content-center gap-4 text-ridercream">
                        {cards.map( (card: CardObject) => <TarotCard key={card.name_short} card={card} sendData={sendData}/>)}
                    </div>
                    

                </div>
                : <p>Unable to retrieve cards</p>
            }

            {
                allCardsFlipped 
                ? 

                    <div className="reading-wrapper text-ridercream">
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

                : 
                    <p className="text-ridercream">Flip all the cards to get your reading.</p>
            }

            <BackButton />
            

        </section>
    )
} else {
   return( 
    <section className="text-center pt-8 pb-8">
        <p>Sorry, no readings are available for your request <span className="text-ridercream">"{params.type}"</span> right now.</p>
        <BackButton />
    </section>
   )
}
}