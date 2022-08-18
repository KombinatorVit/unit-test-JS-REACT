import React, {useState} from 'react';
import {LessonsType} from './07-desr.test';


type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
    address: {
        street: {
            title: string
        }
    }
}

type ManComponentType = {
    title: string
    man: ManType
    food: Array<string>
    car: {modal:string}
}

function UseDimychState(m: string){
    return [m, function(){}]
}


export const ManComponent: React.FC<ManComponentType> = ({title, man, car}) => {

  const[message, setMessage] = useState<string>('Hello')

    return <div>
<h1>{title}
</h1>
        <hr/>
        <div>

            {car.modal}
        </div>

    </div>;
};