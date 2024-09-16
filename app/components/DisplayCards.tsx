import { useState, useEffect } from "react";
import TarotCard from "~/components/TarotCard";
import { createCardString } from "~/lib/functions";
import { CardStatusObj, CardObject } from "~/lib/types";
import { useNavigate } from "@remix-run/react";
import Button from "./Button";


type Props = {
    cards: Array<CardObject>
    heading: string
    subheading: string
    blurb: string
}

export default function DisplayCards({heading, subheading, blurb, cards}: Props) {

    const numOfCards = cards.length;
    const [cardStatus, setCardStatus] = useState<CardStatusObj>({});
    const [allCardsFlipped, setAllCardsFlipped] = useState(false); 
    
    const navigate = useNavigate();

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
        // check that the number of items in the cardStatus object is the same length as the number of cards required 
        const hasCards = Object.keys(cardStatus).length === numOfCards;
        const allFlipped = hasCards && Object.values(cardStatus).every(item => item.flipped === true);
        setAllCardsFlipped(allFlipped);
    },[cardStatus]);

    function goToReading() {
        // send the data required for a reading as url params
        navigate(`/readings/report?type=${encodeURIComponent(heading)}&cardsForReading=${encodeURIComponent(createCardString(cardStatus))}`);
    }

    return (
        <section className="p-8 m-4">
            <h2>{heading}</h2> 

            <div className="m-4">
                <h3 className="font-averiaSerifLibre text-xl text-purplegrey">{subheading}</h3>
                <p className="text-ridercream">{blurb}</p>
            </div>

            {
                cards 
                ? 
                <div className="cards-wrapper border-4 bg-ridercream sm:w-fit p-8 mx-auto md:h-[460px]">
                    
                    <div className="flex flex-row flex-wrap place-content-center gap-4 text-ridercream">
                        {cards.map( (card: CardObject) => <TarotCard key={card.name_short} card={card} sendData={sendData}/>)}
                    </div>
                    

                </div>
                : <p>Unable to retrieve cards</p>
            }

            {
                allCardsFlipped 
                &&

                    <div className="reading-wrapper mt-4 text-ridercream">
                            <Button destination={`/readings/report?type=${encodeURIComponent(heading)}&cardsForReading=${encodeURIComponent(createCardString(cardStatus))}`}>Go to reading</Button>

                    </div>
  
            }


        </section>
    )
}