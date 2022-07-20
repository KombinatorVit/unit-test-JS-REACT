const sentense = 'Hello my friends!';


export function sum (a:number, b: number){
    return a + b;
}


export function mult (a:number, b: number){
    return a * b;
}

export function splitIntoWords(sestense: string){
return sestense.split(' ')
    .map(w => w.trim())
}

