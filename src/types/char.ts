export type charType = {
    name: string
    alignment: number

    items: [
        {
            id: number
            name: string
            type: string
            img: string
        }
    ]

    forcePoints: {
        cur: number
        max: number
    }
    hp: {
        cur: number
        max: number
    }
    stats: {
        strength: number
        intelligence: number
        agility: number
        perception: number
        constitution: number
        luck: number
    }
    skills: {}
}