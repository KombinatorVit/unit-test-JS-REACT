type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type Technologies = {
    id: number
    title: string

}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<Technologies>
}


export const student = {
    id: 1,
    name: 'Vitaliy',
    age: 28,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'JS'},
        {id: 3, title: 'React'}
    ]
};

