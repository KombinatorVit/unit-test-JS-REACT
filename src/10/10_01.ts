export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type WithCompanyType = {
    companies: Array<{ id: number, title: string }>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    };
    return copy;
}

export function moveUser(u: UserWithLaptopType, newCity: string) {
    const copy2 = {
        ...u, address: {...u.address, city: newCity}
    };
    return copy2;
}


export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    const copy2 = {
        ...u, address: {...u.address, house: house}
    };
    return copy2;
}

export function upgradeUserLaptop(u: UserWithLaptopType, newComp: string) {
    return {
        ...u, laptop: {...u.laptop, title: newComp}
    };
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u, books: [...u.books, newBook]
    };
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u, books: u.books.map(b => b == oldBook ? b = newBook : b)
    };
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, remBook: string) => ({
        ...u, books: u.books.filter(rb => rb !== remBook)


    }

);

export function addCompany(u: UserWithLaptopType & WithCompanyType, newComp:{id:number, title: string}) {
    return{
        ...u, companies: [...u.companies, newComp]
    }
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompanyType, id: number, newTitle: string) {
    return {
        ...u, companies: u.companies.map(t => t.id === id ? {...t, title:newTitle} : t)
    };
}