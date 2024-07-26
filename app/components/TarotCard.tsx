import { useEffect, useState } from "react";
import { getImgCode } from "~/functions/functions";

interface TarotCardProps {
    sendData: (cardId: string, flipped: boolean, reversed: boolean, name: string) => void
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
        <div className="tarot-card-wrapper fade-in-text">
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
                                <img src={imagePath} alt={card.name} className={`${cardReversed && 'reversed'}`}/>
                            </div>
                        </div>
                    </div>

                    <div className="fade-in-text flex flex-col gap-2 mb-8 w-[200px] h-[2rem]">
                    {
                        cardFlipped
                        &&
                            <div>
                            <h3 className="font-averiaSerifLibre text-xl">{card.name} {cardReversed && '(reversed)'}</h3>
                            {/* {
                                <p className="max-w-xl mx-auto p-4 text-sm">
                                {cardReversed
                                ? card.meaning_rev
                                : card.meaning_up}
                            </p> 
                            } */}
                            </div>
 
                    }
                    </div>

                </div>

            }
            

        </div>
    )
}

export default TarotCard;