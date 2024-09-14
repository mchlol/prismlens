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

export type {
    CardStatusObj,
    CardObject
}