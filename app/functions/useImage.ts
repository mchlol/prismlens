import { useState, useEffect } from "react";

// https://stackoverflow.com/a/70024111

function useImage(fileName: string) {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('useImage fileName: ', fileName);

    useEffect( () => {
        const fetchImage = async () => {
            try {
                const response = await import(`./assets/cards/${fileName}.jpg`)
                console.log('useImage response: ',response);
                setImage(response.default)
            } catch (err) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [fileName]);

    return {
        loading,
        error,
        image,
    }

}

export default useImage