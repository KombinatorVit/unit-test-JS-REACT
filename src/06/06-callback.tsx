import React, {MouseEvent} from 'react';


export const User = () => {

    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        alert('user should be deleted')
    }

    const saveUser = () => {
        alert('user should be save')
    }
const onNameChanged = () => {
    console.log('name changed');
}

    return (
<div><textarea onChange={onNameChanged}>Vitalis</textarea>
    <button onClick={deleteUser}>delete</button>
    <button onClick={saveUser}>save</button>


</div>
            )}