
type UsersType = {
    [key: string]: {id:number, name:string}

}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '3232312': {id: 3232312, name: 'Natasha'},
    '1212': {id: 1212, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
};

export let usersArray = [{id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'},];


let user = { id: 100500, name: 'Igor'}





users[user.id.toString()] = user
delete users[user.id]

usersArray.find(u=> u.id === 1)
// let usersCopy = [...usersArray.filter(e=> e), user]
let usersArray2 = usersArray.filter(u=> u.id !== user.id)
console.log(users);


