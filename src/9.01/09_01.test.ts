export function icreaseAge(u: UserType) {
    u.age++;
}


type UserType = {
    name: string
    age: number
    address: { title: string }
}


test('reference type test', () => {

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }

    };
    icreaseAge(user);


    expect(user.age).toBe(33);

    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
});


test('array test', () => {

    let users = [
        {
            name: 'Dimych',
            age: 32,
        },
        {
            name: 'Pisun',
            age: 32
        }
    ];
    const admins = users;


    admins.push({name: 'Bandyugan', age: 10});


    expect(users[2]).toEqual({name: 'Bandyugan', age: 10});

});


test('reference type test', () => {

    var user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }

    };

    let addr = user.address;

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: addr
    };
user2.address.title = 'Kanary'
    expect(user.address.title).toBe('Kanary');
});