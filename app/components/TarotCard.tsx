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
        <div className="tarot-card-wrapper">
            {
                card 
                &&
                <div className="tarot-card">

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

                    {
                        cardFlipped
                        &&
                        <div className="fade-in-text flex flex-col gap-2 mb-8 w-[200px]">
                            <h3 className="font-averiaSerifLibre text-xl">{card.name}</h3>
                            <p className="max-w-xl mx-auto p-4 text-sm">
                                {card.meaning_up}
                            </p>
                            
                        </div>
                        
                    }

                </div>

            }
            

        </div>
    )
}

export default TarotCard;