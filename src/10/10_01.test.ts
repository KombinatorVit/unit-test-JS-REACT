import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle,
    upgradeUserLaptop,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyType
} from './10_01';

export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}



test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    };

    const awesomeUser = makeHairstyle(user, 2);


    expect(user.hair).toBe(32);
    expect(awesomeUser.hair).toBe(16);
    expect(awesomeUser.address).toBe(user.address);

});


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const movedUser = moveUser(user, 'Kiev');


    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');

})


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    };

    const userCopy = upgradeUserLaptop(user, 'Macbook');


    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.laptop).not.toBe(userCopy.laptop);
    expect(userCopy.laptop.title).toBe('Macbook');
    expect(user.laptop.title).toBe('ZenBook');

})

test('upgrade laptop to macbook2', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = moveUserToOtherHouse(user, 99);


    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).not.toBe(userCopy.address);
    expect(userCopy.address.house).toBe(99);


})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = addNewBooksToUser(user, 'ts');


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = updateBook(user, 'js','ts');


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('ts')

})

test('remove js', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    };

    const userCopy = removeBook(user, 'js');


    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books[2]).toBe('react')

})

test('addNewCompan', () => {
    let user: UserWithLaptopType & WithCompanyType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

const userCopy = addCompany(user, {id:3, title: 'ATB'})

    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.address).toBe(userCopy.address);
    expect(userCopy.companies.length).toBe(3)
    expect(userCopy.companies[2].id).toBe(3);
    expect(userCopy.companies[2].title).toBe('ATB');

})

test('update company', () => {
    let user: UserWithLaptopType & WithCompanyType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epa'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompanyTitle(user, 1 , 'Epam')

    expect(user).not.toBe(userCopy);
    expect(user.address).toBe(userCopy.address);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(userCopy.companies[0].title).toBe('Epam');


})