type CardInfo = {
    desc: string
    meaning_rev: string
    meaning_up: string
    name: string
    name_short: string
    suit: string
    type: string
    value: string
    value_int: number
}

// intepret the short name to retrieve the right card image
function getImgCode(card: CardInfo) {
    console.log('getImgCode card: ',card);
    const name = card.name_short;
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

export {
    getImgCode
}