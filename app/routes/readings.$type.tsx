import { useState, useEffect } from "react";
import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, json, useParams } from "@remix-run/react";
import { CardStatusObj, CardObject } from "~/functions/types";
import BackButton from "~/components/BackButton";
import DisplayCards from "~/components/DisplayCards";

type LoaderData = {
    cards: Array<CardObject>
    numOfCards: number
}

export let loader: LoaderFunction = async ({params}: LoaderFunctionArgs) => {

    let numOfCards = 0;

    switch(params.type) {
        case 'yesno':
            numOfCards = 1;
            break;
        case 'pastpresentfuture':
            numOfCards = 3;
            break;
        case 'dream':
            numOfCards = 4;
            break;
        case 'relationship':
            numOfCards = 5;
            break;
        default:
            numOfCards = 1;
    }
    const response = await fetch(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=${numOfCards}`);
    const data = await response.json();
    const cards = data.cards;
    return json<LoaderData>({ cards, numOfCards })
}

export default function GetTarotCards() {

    const params = useParams();
    console.log(params)
    const { cards, numOfCards } = useLoaderData<LoaderData>();

    const [cardStatus, setCardStatus] = useState<CardStatusObj>({});
    const [allCardsFlipped, setAllCardsFlipped] = useState(false); 

    useEffect( () => {
        const hasCards = Object.keys(cardStatus).length === numOfCards;
        const allFlipped = hasCards && Object.values(cardStatus).every(item => item.flipped === true);
        setAllCardsFlipped(allFlipped);
    },[cardStatus]);

    return (
        <section className="text-center">
            {
                params.type === 'yesno'
                ?
                <DisplayCards 
                cards={cards} 
                heading="Yes or No?" 
                subheading="Struggling with a decision?" 
                blurb="Think about your question, then click the card to flip it."
                />
                : params.type === 'pastpresentfuture'
                    ?
                    <DisplayCards
                    cards={cards}
                    heading="Past, Present, Future"
                    subheading="Gain insight into the energies and events shaping your life journey."
                    blurb="Reflect on past influences, understand current situations, and explore potential future outcomes."
                    />
                    :  <div className="flex flex-col justify-center items-center text-ridercream gap-4 p-8 max-w-[65ch] mx-auto">
                        <h2 className="text-purplegrey text-2xl md:text-5xl font-averiaSerifLibre">uggghhhhhh....</h2>
                                <img
                                src="/dalle-portrait-2 copy.png"
                                alt="A gen-z witch with e-girl style, holding the tarot card 'the star'."
                                className="w-2/3 mx-auto rounded-3xl -hue-rotate-30"
                                />
                            <p>I'm not in the mood for a  <span className="text-rideryellow">"{params.type}"</span> reading right now.<br />
                            It's not that I don't know how, I just don't want to.</p>

                        </div>
            }


            <BackButton />
            

        </section>
    )

}