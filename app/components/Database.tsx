import CardSmall from "~/components/CardSmall";
import DatabaseSection from "~/components/DatabaseSection";
import { Link } from "@remix-run/react";
import StarCircleOutline from "../assets/starcircle-outline.svg"

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

type CardsArr = {
    cards: Array<CardObject>
}

export default function Database(props: CardsArr) {

    const { cards } = props;

    return (

        <div className="database-wrapper mb-4">

            <div className="img-wrapper relative">
                <img src={StarCircleOutline} className="-z-10 absolute -top-32 right-2 opacity-50 svg-cream max-w-[80%]" alt="" />
            </div>

            <div className="section-heading mb-4 mx-auto flex flex-col gap-4 p-4">
                <h2 className="uppercase text-3xl md:text-5xl font-averiaSerifLibre text-purplegrey">Tarot Database</h2>
                <p className="max-w-[80ch] mx-auto">
                    Tarot cards are a set of 78 cards used for self-reflection, and spiritual guidance. The cards originated in 15th-century Europe as a playing card game called "tarocchi." By the 18th century, they began to be used for spiritual purposes, with occultists assigning deeper meanings to the cards' imagery. <br />
                    Each card features symbolic imagery and meanings, divided into the Major Arcana, which represents significant life events and spiritual lessons, and the Minor Arcana, which focuses on day-to-day experiences and challenges.
                </p>
                <p className="max-w-[55ch] mx-auto">
                The <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-purplegrey">Rider-Waite-Smith Tarot</a> is one of the most popular and widely used tarot decks, first published in 1909.
                </p>
            </div>

            <div className="database-container flex relative bg-[url('/meshgradbg-duo.png')] bg-cover text-ridercream">
                <div className="sticky top-20 p-4 h-[calc(100vh-2rem)] overflow-auto w-48 mt-4 ml-4 mr-4">
                    <h2>Jump to:</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="#major"
                            className="text-pink hover:text-ridercream transition-all duration-200 ease-in-out">
                                Major Arcana
                            </Link>
                        </li>
                        <li>
                            <Link to="#minor"
                            className="text-pink hover:text-ridercream transition-all duration-200 ease-in-out">Minor Arcana
                            </Link>
                        </li>
                        <li>
                            <Link to="#swords"
                            className="text-pink hover:text-ridercream transition-all duration-200 ease-in-out">Swords
                            </Link>
                        </li>
                        <li>
                            <Link to="#wands"
                            className="text-pink hover:text-ridercream transition-all duration-200 ease-in-out">Wands
                            </Link>
                        </li>
                        <li>
                            <Link to="#pentacles"
                            className="text-pink hover:text-ridercream transition-all duration-200 ease-in-out">Pentacles
                            </Link>
                        </li>
                        <li>
                            <Link to="#cups"
                            className="text-pink hover:text-ridercream transition-all duration-200 ease-in-out">Cups
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 ml-4 p-4">
                    <div className="max-w-[1240px] mx-auto">
                        <h3 id="major" className="font-averiaSerifLibre text-3xl m-4">Major Arcana</h3>
                        <ul className="flex gap-4 flex-wrap justify-center mr-8 ml-8">
                            {
                                cards.filter(card => card.type === 'major').map(card => <li key={card.name_short}>
                                    <CardSmall card={card} />
                                    </li>)
                            }
                        </ul>
                    </div>
                    <h3 id="minor" className="font-averiaSerifLibre text-3xl m-8">Minor Arcana</h3>
                    <DatabaseSection suit="swords" cards={cards.filter(card => card.suit === 'swords')} />
                    <DatabaseSection suit="wands" cards={cards.filter(card => card.suit === 'wands')} />
                    <DatabaseSection suit="pentacles" cards={cards.filter(card => card.suit === 'pentacles')} />
                    <DatabaseSection suit="cups" cards={cards.filter(card => card.suit === 'cups')} />
                </div>
            </div>
        </div>

    )
}