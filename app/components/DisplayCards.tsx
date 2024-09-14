import { useState, useEffect } from "react";
import TarotCard from "~/components/TarotCard";
import Reading from "./Reading";
import { createCardString } from "~/functions/functions";
import { CardStatusObj, CardObject } from "~/functions/types";
import { Link } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";


type Props = {
    cards: Array<CardObject>
    heading: string
    subheading: string
    blurb: string
}

export default function DisplayCards(props: Props) {

    const { cards } = props;
    const numOfCards = props.cards.length;
    const [cardStatus, setCardStatus] = useState<CardStatusObj>({});
    const [allCardsFlipped, setAllCardsFlipped] = useState(false); 
    
    const navigate = useNavigate();
    const type = props.heading;

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

    function goToReading() {
        console.log(cardStatus);
        console.log(createCardString(cardStatus));
        navigate(`/readings/report?type=${encodeURIComponent(type)}&cardsForReading=${encodeURIComponent(createCardString(cardStatus))}`);
    }

    return (
        <section className="p-8 m-4">
            <h2 className="uppercase text-2xl md:text-5xl font-averiaSerifLibre mb-2 text-purplegrey">{props.heading}</h2> 

            <div className="m-4">
                <h3 className="font-averiaSerifLibre text-xl text-purplegrey">{props.subheading}</h3>
                <p className="text-ridercream">{props.blurb}</p>
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

                    <div className="reading-wrapper mt-4 text-ridercream">
                            <button className="bg-pink hover:bg-ridercream text-purplegrey p-2 rounded-md" onClick={goToReading}>
                                Go to reading
                            </button>
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