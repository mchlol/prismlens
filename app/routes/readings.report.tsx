import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, json } from "@remix-run/react";
import { useState, useEffect } from "react";
import { fetchReport } from "~/functions/functions";
import HomeButton from "~/components/HomeButton";

type LoaderData = {
    report: string
    type: string
    cardsForReading: string
}

export let loader: LoaderFunction = async ({request}) => {
    // get the params out of the url
    const url = new URL(request.url);
    const type = url.searchParams.get('type') || '';
    const cardsForReading = url.searchParams.get('cardsForReading') || '';

    // construct the message to be sent to the API
    const message = `For a ${type} reading: ${cardsForReading}`;
    const report = await fetchReport(message);
    
    return json<LoaderData>( {report, type, cardsForReading} );
}


export default function ReadingReport() {

    const { report, type, cardsForReading } = useLoaderData<LoaderData>();

    const [reading, setReading] = useState('');

    useEffect( () => {
        setReading(report);
    },[]);

    return (
        <section className="text-center text-ridercream m-8">
            <h1 className="uppercase text-2xl md:text-5xl font-averiaSerifLibre mb-2 text-purplegrey">Your Reading</h1>
            <h2 className="text-xl text-purplegrey font-averiaSerifLibre">{type}</h2>

            <div className="reading-cards fade-in-text p-4">
                <p>{cardsForReading}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 p-8 max-w-[75ch] mx-auto">
                <p>{report}</p>
            </div>

            <HomeButton />
        </section>
    )
}