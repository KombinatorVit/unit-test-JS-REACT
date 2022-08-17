import React, {ChangeEvent, MouseEvent} from 'react';


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

const focusLostHandler = ()=> {
        console.log('focus lost')
}
const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed' + event.currentTarget.value)
}

    return (
<div><textarea onChange={onNameChanged}
    onBlur={focusLostHandler}>Vitalis</textarea>
    <input type="number" onChange={onAgeChanged}/>
    <button onClick={deleteUser}>delete</button>
    <button onClick={saveUser}>save</button>


</div>
            )}