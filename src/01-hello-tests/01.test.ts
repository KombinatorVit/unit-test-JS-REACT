import {mult, splitIntoWords, sum} from './01';


let a: number;
let b: number;
let c: number;


beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});
test('sum should be correct', () => {
// data

// action
    let result = sum(a, b);
    let result2 = sum(b, c);
    // expect result

    expect(result).toBe(3);
    expect(result2).toBe(5);

});

test('multiply should be correct', () => {
// data

// action
    let result = mult(a, b);
    let result2 = mult(b, c);
    // expect result

    expect(result).toBe(2);
    expect(result2).toBe(6);

});
// data
test('spliting into words should be correct', () => {
    let sent1 = 'hello my friends!';
    let sent2 = 'JS - the best programming language.';

    // action
    let result = splitIntoWords(sent1);
    let result2 = splitIntoWords(sent2);
    // expect result

    expect(result.length).toBe(3);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('my');
    expect(result[2]).toBe('friends!');


    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('JS');
    expect(result2[1]).toBe('-');
    expect(result2[2]).toBe('the');
    expect(result2[3]).toBe('best');
    expect(result2[4]).toBe('programming');
    expect(result2[5]).toBe('language.');
});