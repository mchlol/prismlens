import React from "react";
import { getImgCode } from "~/functions/functions";
import { Link } from "@remix-run/react";

interface TarotCardProps {
    card: {
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
}


const TarotCard: React.FC<TarotCardProps> = ({card}) => {

    const imagePath = `/cards/${getImgCode(card.name_short)}.jpg`;

    const [cardFlipped, setCardFlipped] = React.useState(false);

    return (
        <div className="tarot-card">
            {
                card 
                &&
                <div>

                    <h3>{cardFlipped ? card.name : 'Click the card to reveal'}</h3>
                    <div className="scene">
                        <div className={`tarot-card ${cardFlipped ? 'tarot-card-flipped' : ''}`} onClick={() => setCardFlipped(prevCardFlipped => !prevCardFlipped)}>
                            <div className="card-face card-front">
                                <img src="/cards/back.jpg" alt="back of the Rider-Waite tarot deck" />
                            </div>
                            <div className="card-face card-back">
                                <img src={imagePath} alt={card.desc} />
                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                cardFlipped &&
                <div className="fade-in-text flex flex-col gap-4">
                     <p className="max-w-xl mx-auto">{card.meaning_up}</p>
                    <Link to="/yesno" onClick={() => setCardFlipped(prevCardFlipped => !prevCardFlipped)}>
                        <button className="bordered border-2 p-2 rounded-lg">Get a new card</button>
                    </Link>
                </div>
            }

            
            
        </div>
    )
}

export default TarotCard;