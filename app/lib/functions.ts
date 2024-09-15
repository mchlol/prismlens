function getShortName(name: string) {
    // * make a union type for each object instead of using 'any'

    const major: any = {
        "The Fool": "m00",
        "The Magician": "m01",
        "The High Priestess": "m02",
        "The Empress": "m03",
        "The Emperor": "m04",
        "The Hierophant": "m05",
        "The Lovers": "m06",
        "The Chariot": "m07",
        "Strength": "m08",
        "The Hermit": "m09",
        "Wheel of Fortune": "m10",
        "Justice": "m11",
        "The Hanged Man": "m12",
        "Death": "m13",
        "Temperance": "m14",
        "The Devil": "m15",
        "The Tower": "m16",
        "The Star": "m17",
        "The Moon": "m18",
        "The Sun": "m19",
        "Judgement": "m20",
        "The World": "m21"
    };

    const suits: any = {
        'Swords': 's', 
        'Pentacles': 'p', 
        'Wands': 'w',
        'Cups': 'c'
    };

    const ranks: any = {
        'Ace': '01',
        'Two': '02',
        'Three': '03',
        'Four': '04',
        'Five': '05',
        'Six': '06',
        'Seven': '07',
        'Eight': '08',
        'Nine': '09',
        'Ten': '10',
        'Page': '11',
        'Knight': '12',
        'Queen': '13',
        'King': '14'
    }

    if (Object.keys(major).includes(name)) {
        // ! check for strength/fortitude and judgement
        return major[name];
    }

    // if no early return, continue
    const rank = name.split(' ')[0];
    const suit = name.split(' ')[2];
    const shortName = `${suits[suit]}${ranks[rank]}`;

    return shortName;
}

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

function createCardString(cards: any) {
    console.log('cards in function: ',cards);

    const array = Object.values(cards);
    let names: Array<String> = [];
    array.forEach( (card: any) => names.push(card.name));
    const join = names.join(', ');
    console.log('join in function: ',join);
    return join;
}

export {
    getShortName,
    getImgCode,
    renameCard,
    createCardString
}

// ai

export async function fetchReport(readingRequest: string) {
    console.log('reading request in function: ',readingRequest);
    const messages = [
        {
            role: 'system',
            content: 'You are a modern witch providing sarcastic tarot card readings to your hapless clients. Give your reading, briefly explaining what each card symbolises, in 100-120 words. If no cards are supplied, let the client know you can\'t provide a reading with no cards. If the reading type is not a known tarot reading type, tell the client so, and tell them off for wasting your time.'
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