
export type LessonsType = {
    title:string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Vit',
        age: 32,
        lessons: [{title:'1'}, {title:'2'} ],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test('', ()=> {

    let props = {
        name: 'Vit',
        age: 32,
        lessons: [{title:'1'}, {title:'2'} ],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }

// const age = props.age;
// const lessons = props.lessons;

    const {age, lessons} = props;
const {title} = props.address.street


const a = props.age;
const l = props.lessons;

expect(age).toBe(32)
expect(lessons.length).toBe(2)


    expect(a).toBe(32)
    expect(l.length).toBe(2)
    expect(title).toBe('Nezavisimosti street')
})


test('', () => {
const l1 = props.lessons[0]
const l2 = props.lessons[1]
    expect(l1).toBe('1')
    expect(l2).toBe('2')
})