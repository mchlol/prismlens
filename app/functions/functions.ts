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

export {
    getImgCode
}