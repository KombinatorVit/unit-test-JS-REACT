
import React, {FC} from 'react';

const render = {
    count1: 0,
    count2: 0,
};


export type CountProps = {
    id?:number
    value:number
}
export default React.memo(function Count <FC>({ id, value }: CountProps) {
    // @ts-ignore
    console.warn(`🔴 Count${id} render: ${++render[`count${id}`] }`);

    return (
        <div>
            <h1 className="cyan">{value}</h1>
        </div>
    );
});