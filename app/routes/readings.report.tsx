import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json, Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { fetchReport, getShortName } from "~/lib/functions";
import { ReadingToSave } from "~/lib/types";
import Button from "~/components/Button";
import Line from "../assets/llline.svg";
import { nanoid } from "nanoid";

type LoaderData = {
    report: string
    type: string
    cardsForReading: string
    cardsArr: Array<String>
}

export let loader: LoaderFunction = async ({request}) => {
    // get the params out of the url
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || '';
    const cardsForReading = url.searchParams.get('cardsForReading') || '';


    // construct the message to be sent to the API
    const message = `For a ${type} reading: ${cardsForReading}`;
    const report = await fetchReport(message);

    const cardsArr = cardsForReading.split(', ');
    
    return json<LoaderData>( {report, type, cardsForReading, cardsArr } );
}


export default function ReadingReport() {

    const { report, type, cardsForReading, cardsArr } = useLoaderData<LoaderData>();
    const [reading, setReading] = useState('');
    const [readingId, setReadingId] = useState('');
    const [readingSaved, setReadingSaved] = useState(false);

    function stripOrientation(name: string) {
        if (name) {
            const arr = name.split(' ');
            arr.pop();
            return arr.join(' ')
        }
    }

    function isCardReversed(name: string) {
        if (name) {
            const arr = name.split(' ');
            const orientation = arr.pop();

            return orientation === 'reversed' ? true : false;
        }
    }
    
    useEffect( () => {
        setReading(report);
        if (!readingId) {
            setReadingId(nanoid());
        }
    },[]);

    useEffect( () => {
        // if the reading has changed assign a new id
        setReadingId(nanoid());
    },[reading])

    function saveReading() {


        const readingToSave: ReadingToSave = {
            id: readingId,
            date: Date.now(),
            type,
            cards: cardsArr,
            readingText: report
        }

        let storedReadings = localStorage.getItem('savedReadings');
        let parsedReadings: ReadingToSave[] = [];

        if (storedReadings) {
            try {
                parsedReadings = JSON.parse(storedReadings);
            } catch(err) {
                console.error("Error parsing stored readings: ", err);
            }
        }

        if (!parsedReadings || parsedReadings.length === 0) {
            // the item doesn't exist in local storage yet, so create it
            parsedReadings = [readingToSave];            
        } else {
            // the item does exist, but first check if this reading is already saved
            const indexInList = parsedReadings.findIndex(reading => reading.id === readingId);
            const exists = indexInList >= 0;
            if (!exists) {
                parsedReadings.push(readingToSave);
            } else {
                // ? display to the user
                console.log('Reading already saved')
            }
        }

        localStorage.setItem('savedReadings', JSON.stringify(parsedReadings));
        setReadingSaved(true);
    }

    return (
        <section className="text-center text-ridercream m-8">
            <h2>Your Reading</h2>

            <div className="text-purplegrey fade-in-text p-4 m-4 mx-auto border-purplegrey border-4 bg-ridercream flex flex-col justify-center items-center w-fit">

                <div className="flex flex-col gap-4 justify-center items-center p-8">
                    <h3 className="text-2xl">{type}</h3>
                    <p className="font-averiaSerifLibre">{cardsForReading}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {
                            cardsArr.map(card => <img key={card} className={`w-full max-w-24 md:max-w-36 ${isCardReversed(card) ? 'rotate-180' : ''}`} src={`/cards/${getShortName(stripOrientation(card))}.jpg`} alt="" />)
                        }
                    </div>
                </div>

                <img src={Line} alt="" className="w-24 svg"/>

                <div className="flex flex-row justify-center items-start gap-4 p-8 max-w-[75ch] mx-auto w-fit mb-4">
                    <img src="/dalle-portrait.webp" className="hidden md:block md:max-w-40 rounded-lg -hue-rotate-30" />
                    <p>{report}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <button
                    onClick={saveReading}
                    disabled={readingSaved}
                    className={readingSaved ? 'opacity-20 hover:bg-pink cursor-not-allowed' : ''}
                    >
                        {
                            readingSaved
                            ? 'Reading saved'
                            : 'Save this reading'
                        }
                    </button>
                    <Link to="/readings" className="mb-4 underline underline-offset-2 hover:no-underline">
                        <span>Back to readings</span>
                    </Link>
                </div>
            </div>

            

            <Button destination="back">Back</Button>
        </section>
    )
}