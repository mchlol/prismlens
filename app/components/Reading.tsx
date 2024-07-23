import { useState, useEffect } from "react";
import { fetchReport } from "~/functions/functions";

interface AppProps {
    readingType: string
    cards: Array<string>
}

const Reading = ({readingType, cards}: AppProps) => {

    // reading type will be a string e.g. 'yes or no question'
    // cards should be an array of strings e.g. ['The Empress upright', 'Ace of Cups reversed', 'Nine of Swords upright'];

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
        getReport();
        console.log(report);
    },[cards]);

    console.log('Reading props: ', readingType, cards);


    return (
        <article>
            {
                loading
                ? 
                    <p className="max-w-[800px] mx-auto fade-in-text p-4">Consulting the cards...please wait...</p>
                :
                    report && <p className="max-w-[800px] mx-auto fade-in-text p-4">{report}</p>
            }
        </article>
    )
}

export default Reading;