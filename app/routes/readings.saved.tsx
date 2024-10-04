import { useEffect, useState } from "react";
import Button from "~/components/Button";
import { ReadingToSave } from "~/lib/types";


export default function SavedReading() {


    const [savedReadings, setSavedReadings] = useState<Array<ReadingToSave>>();

    useEffect( () => {
        const savedReadings = localStorage.getItem('savedReadings');
        let parsedReadings: Array<ReadingToSave>

        if (savedReadings) {
            try {
                parsedReadings = JSON.parse(savedReadings);
                console.log(parsedReadings);
                setSavedReadings(parsedReadings);
            } catch(err) {
                console.log('Error retrieving readings from storage: ',err);
            }
        }
        
    },[]);

    // TODO: display images in this component 
    // * we don't have the name_short property from the card object because it isn't passed through URL parameters
    // for each saved reading, return a component (using the details element)
    // in that component, map over the cards to add a new property - the short name
    // strip 'upright' or 'reversed' from the end of the card name e.g. 'The Magician upright' becomes 'The Magician'
    // split the string into words and IF either of those words are the last element, remove it
    // use getShortName to get the short name so 'The Magician' comes 'ma01'
    // then use getImgCode with the short name so "ma01" becomes "m01"
    // (we do both steps because we already have both above functions)
    // * consider: if we make a component that can return the image just from passing the name we can just put the above in there

    return (
        <section className="text-center">
            <h2 className="m-4">Saved Readings</h2>
            <div className="mt-4 mb-4 ml-8 mr-8 p-4 border-4 border-purplegrey bg-ridercream">
            {
                savedReadings
                ? 
                    <div>
                        {savedReadings.map(reading=> 
                            <div key={reading.id}>
                                <details className="m-2">
                                    <summary className="font-averiaSerifLibre text-xl">
                                        {new Date(reading.date).toDateString()}: <span className="text-purplegrey font-bold">{reading.type}</span>
                                    </summary>
                                    {/* <img src={`/cards/${getImgCode(card.name_short)}.jpg`} className="w-full" /> */}
                                    <p>{reading.cards.map(card => <span key={card}>{card}, </span>)}</p>
                                    <p>{reading.readingText}</p>
                                </details>
                            </div>
                        )}
                    </div>
                : <p>No readings to display.</p>
            }
            </div>

            <Button destination="back">Back</Button>
        </section>

    )
}