//01
type AnimalType = {
    name: string,
    fly: boolean,
    gender: gender,
    leg: number,
    swim: boolean
}

enum gender {
    male,
    female
}

const Animal1: AnimalType = {
    name: "tiger",
    fly: false,
    gender: gender.male,
    leg: 4,
    swim: true
}

//02
type PeopleType = {
    name: string,
    age: number,
    gender: gender,
    hobbie: string | string[],
    job?: string

}


const People1: PeopleType = {
    name: "peter",
    age: 20,
    gender: gender.male,
    hobbie: ["watch movie", "swiming"]
}

const People2: PeopleType = {
    name: "alex",
    age: 18,
    gender: gender.female,
    hobbie: "play game",
    job: "doctor"
}

//03
type PokemonObject = {
    name: string,
    gender: string,
    height: number,
    weight: number,
    Location_area_encounters: string,
    moves: {
        name: string,
        effect: string

    }[]

    held_items?: {
        name: string,

        stat: {
            armor: number
            damage: number
            hp: number
            speed: number
        }
    }[]

    type: TypePokemon[] | TypePokemon
}

enum TypePokemon{
    Fire,
    Flying,
    grass
}

const Pokemon1: PokemonObject = {
    name: "Charlizard",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encounters: "forest",
    moves: [
        {
            name: "flying",
            effect: "cannot take damage from ground"
        }
    ],
    type: [TypePokemon.Fire, TypePokemon.Flying]
}

const Pokemon2:PokemonObject = {
    name: "babalsor",
    gender: "female",
    height: 200,
    weight: 200,
    Location_area_encounters: "forest",
    moves: [
        {
            name: "kick",
            effect: "deal damage 50"
        }
    ],
    type: TypePokemon.grass,
    held_items: [
        {
            name: "glove",
            stat: {
                armor: 20,
                damage: 10,
                hp: 200,
                speed: 200
            }
        }
    ]

}

console.log(Animal1)
