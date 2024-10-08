import { useEffect, useState } from "react";
import { getImgCode, renameCard } from "~/lib/functions";
import { Link } from "@remix-run/react";
import { CardObject } from "~/lib/types";

interface TarotCardProps {
    sendData: (cardId: string, flipped: boolean, reversed: boolean, name: string) => void
    card: CardObject
}

const TarotCard = ({card, sendData}: TarotCardProps) => {

    const imagePath = `/cards/${getImgCode(card.name_short)}.jpg`;

    const [cardFlipped, setCardFlipped] = useState(false);
    const [cardReversed, setCardReversed] = useState(false);

    function isReversed() {
        const options: Array<boolean> = [true, false];
        const randomNum: number = Math.floor(Math.random() * 2);
        setCardReversed(options[randomNum]);
    }

    useEffect( () => {
        isReversed();
    },[card])

    return (
        <div className={`tarot-card-wrapper fade-in-text ${cardFlipped ? 'transition-all hover:scale-105': ''}`}>
            {
                card 
                &&
                <div className="tarot-card">

                    <div className="scene">
                        <div className={`tarot-card ${cardFlipped ? 'tarot-card-flipped' : ''}`} onClick={() => {
                            setCardFlipped(prevCardFlipped => !prevCardFlipped)
                            sendData(card.name_short, !cardFlipped, cardReversed, card.name);
                            }
                            }>
                            <div className="card-face card-front">
                                <img src="/cards/back.jpg" alt="back of the Rider-Waite-Smith tarot deck" />
                            </div>
                            <div className="card-face card-back">
                                <img src={imagePath} alt={renameCard(card.name)} className={`${cardReversed && 'reversed'}`}/>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-text flex flex-col gap-2 mb-8 w-[200px]">
                    {
                        cardFlipped
                        &&
                        <Link to={`/tarotdatabase/${card.name_short}`}
                        className="text-pink">
                            <h4 className="font-averiaSerifLibre text-xl">{renameCard(card.name)} {cardReversed && '(reversed)'}</h4>
                        
                        </Link>
 
                    }
                    </div>

                </div>

            }
            

        </div>
    )
}

export default TarotCard;