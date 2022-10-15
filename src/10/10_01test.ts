export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

function makeHairstyle(u: UserType, power: number) {
    const copy = {...u,
        hair : u.hair / power
    };
    return copy;
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    };

    const awesomeUser = makeHairstyle(user, 2);


    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);

});
