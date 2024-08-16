import { useState, useEffect } from "react";
import { fetchReport } from "~/functions/functions";

interface AppProps {
    readingType: string
    cards: Array<string>
}

const Reading = ({readingType, cards}: AppProps) => {


    const [report, setReport] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getReport = async () => {
        const readingRequest = `For a '${readingType}' reading: ${cards.map( card => `${card} ` )}`;

        try {
            const result = await fetchReport(readingRequest);
            setReport(result);
            setError(null);
            setLoading(false);
        } catch (err: any) {
            setError(err.message);
        }
    };
    
    useEffect( () => {
        // ? is this in the right place?
        getReport();
    },[cards]);



    return (
        <article>
            {
                loading
                ? 
                    <div className="reading-container">
                        <h3 className="text-lg font-averiaSerifLibre">Your Reading</h3>
                        <p className="max-w-[800px] mx-auto fade-in-text p-4">Consulting the cards...please wait...</p>
                    </div>
                :
                    report && <p className="max-w-[800px] mx-auto fade-in-text p-4">{report}</p>
            }
        </article>
    )
}

export default Reading;