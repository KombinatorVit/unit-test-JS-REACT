
export type UserType = {
    name: string
    hair: number
    address: {title: string}
}
function hairdresser(u:UserType, power: number) {
    const copy = {...u}
    copy.hair = u.hair / power
    test('reference type test', ()=> {
        let user:UserType = {
            name:'Dimych',
            hair :32,
            address: {
                title:'Minsk'
            }
        }

        hairdresser(user, 2)

        expect(user.hair).toBe(16)
    })
}