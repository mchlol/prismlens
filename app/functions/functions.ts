// intepret the short name to retrieve the right card image
function getImgCode(card: string) {
    const name = card;
    let letter = name.slice(0,1);
    let lastNums = name.slice(2);

    // get major arcana
    if (letter === 'a') {
        letter = 'm'
    } 

    // get minor arcana
    if (lastNums === 'ac') {
        lastNums = '01'
    } else if (lastNums === 'pa') {
        lastNums = '11'
    } else if (lastNums === 'kn') {
        lastNums = '12'
    } else if (lastNums === 'qu') {
        lastNums = '13'
    } else if (lastNums === 'ki') {
        lastNums = '14'
    }

    const code = letter+lastNums;
    return code;
}

function renameCard(cardName: string) {
    return cardName === 'Fortitude' ? 'Strength' : cardName === 'The Last Judgment' ? 'Judgement' : cardName;
}

export {
    getImgCode,
    renameCard
}

// ai

export async function fetchReport(readingRequest: string) {
    const messages = [
        {
            role: 'system',
            content: 'You are a modern witch providing sarcastic tarot card readings to your hapless clients. Give your reading in 70-100 words.'
        },
        {
            role: 'user',
            content: `${readingRequest}`
        }
    ]
    
    try {
        const url = 'https://openai-api-worker.m-andreabr.workers.dev'
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messages)
        })
        const data = await response.json()
        
        if (!response.ok) {
            throw new Error(`Worker Error: ${data.error}`)
        }
        return data.content;
    } catch (err: any) {
        console.error(err.message)
        return 'Unable to access AI. Please refresh and try again'
    }
}