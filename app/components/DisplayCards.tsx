import { useState, useEffect } from "react";
import TarotCard from "~/components/TarotCard";
import Reading from "./Reading";
import { createCardString } from "~/functions/functions";

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

type Props = {
    cards: Array<CardObject>
    numOfCards: number
    sendData: (cardId: string, flipped: boolean, reversed: boolean, name: string) => void
    heading: string
    subheading: string
    blurb: string
}

export default function DisplayCards(props: any) {

    console.log(props);
    const numOfCards = props.cards.length;
    const { cards } = props;
    const [cardStatus, setCardStatus] = useState<CardStatusObj>({});
    const [allCardsFlipped, setAllCardsFlipped] = useState(false); 

    console.log('cardStatus: ',cardStatus);

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

    return (
        <section className="p-8">
            <h2 className="uppercase text-4xl font-averiaSerifLibre mb-2 text-purplegrey">{props.heading}</h2> 

            <div>
                <h3 className="font-averiaSerifLibre text-xl text-purplegrey">{props.subheading}</h3>
                <p>{props.blurb}</p>
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
                            readingRequest={createCardString(cardStatus)}
                            />
                    </div>

                : 
                    <p className="text-ridercream">Flip all the cards to get your reading.</p>
            }


        </section>
    )
}