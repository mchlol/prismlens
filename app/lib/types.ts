interface CardStatusObj {
    [cardId: string]: {
        flipped: boolean
        reversed: boolean
        name: string
    },
}

type CardObject = {
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

type CardsArr = {
    cards: Array<CardObject>
}

type ReadingToSave = {
    id: string
    date: string
    type: string
    cards: Array<string>
    readingText: string
}

export type {
    CardStatusObj,
    CardObject,
    CardsArr,
    ReadingToSave
}