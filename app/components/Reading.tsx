import { useState, useEffect } from "react";
import { fetchReport } from "~/lib/functions";

interface Props {
    readingType: string
    readingRequest: string
}

const Reading = ({readingType, readingRequest}: Props) => {


    const [report, setReport] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getReport = async () => {
        const message = `For a '${readingType}' reading: ${readingRequest}`;

        try {
            const result = await fetchReport(message);
            setReport(result);
            setError(null);
            setLoading(false);
        } catch (err: any) {
            console.log(err.message);
            setError(err.message);
        }
    };
    
    useEffect( () => {
        // ? is this in the right place?
        getReport();
    },[readingRequest]);



    return (
        <article>
            {
                loading
                ? 
                    <div className="reading-container">
                        <h3 className="text-lg font-averiaSerifLibre">Your Reading</h3>
                        <p className="max-w-[800px] mx-auto fade-in-text p-4">Consulting the cards...please wait...</p>
                        {/* <p>The vibes are off. Come back later.</p> */}
                    </div>
                :
                // TODO move into a route so call to api can be done through loader
                    report && <p className="max-w-[800px] mx-auto fade-in-text p-4">{report}</p>
            }
        </article>
    )
}

export default Reading;