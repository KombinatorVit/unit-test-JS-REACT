function icreaseAge(u:UserType){
    u.age++;
}


type UserType = {
    name:string
    age: number
    address: {title:string}
}


test('array test', () => {

    var users:UserType= {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }

    }





    expect(users.age).toBe(33)
})