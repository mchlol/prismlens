import { useState, useEffect } from "react";
import TarotCard from "~/components/TarotCard";
import Reading from "./Reading";
import { createCardString } from "~/functions/functions";
import { CardStatusObj, CardObject } from "~/functions/types";


type Props = {
    cards: Array<CardObject>
    heading: string
    subheading: string
    blurb: string
}

export default function DisplayCards(props: Props) {

    const numOfCards = props.cards.length;
    const { cards } = props;
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
                    <p className="text-ridercream">
                        {
                        numOfCards > 1
                        ?
                        "Flip all the cards to get your reading."
                        :
                        "Flip the card to get your reading."
                        }</p>
            }


        </section>
    )
}