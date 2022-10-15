export type UserType = {
    name: string
    hair: number
    address: {city: string, house: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {...u,
        hair : u.hair / power
    };
    return copy;
}

export function moveUser(u: UserWithLaptopType, newCity: string){
    const copy2 = {...u, address: {...u.address, city: newCity}
    };
    return copy2;
}