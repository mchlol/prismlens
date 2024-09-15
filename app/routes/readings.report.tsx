import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import { useState, useEffect } from "react";
import { fetchReport, getShortName } from "~/functions/functions";
import HomeButton from "~/components/HomeButton";

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
    console.log(cardsArr);

    const [reading, setReading] = useState('');

    useEffect( () => {
        setReading(report);
        console.log(getShortName(cardsArr[0]))
    },[]);

    return (
        <section className="text-center text-ridercream m-8">
            <h1 className="uppercase text-2xl md:text-5xl font-averiaSerifLibre mb-2 text-purplegrey">Your Reading</h1>
            <h2 className="text-xl text-purplegrey font-averiaSerifLibre">{type}</h2>

            <div className="reading-cards text-purplegrey fade-in-text p-4">
                <p>{cardsForReading}</p>

                <div className="flex gap-4 justify-center p-8 border-pink">
                    {
                        cardsArr.map(card => <img key={card}className="max-w-32" src={`/cards/${getShortName(card)}.jpg`} alt="" />)
                    }
                </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 p-8 max-w-[75ch] mx-auto w-fit border-4 mb-4">
                <img src="/dalle-portrait.webp" className="max-w-40 rounded-lg -hue-rotate-60" />
                <p>{report}</p>
            </div>

            <HomeButton />
        </section>
    )
}