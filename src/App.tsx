import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';

function App() {
    const names = ['Dim', 'Sveta', 'Katya', 'Victor', 'Ignat'];
    const users = [{name: 'Dim'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Victor'}, {name: 'Ignat'}];
    const liElement = names.map((n, index) => <li key={index}> {n}</li>);
    const liUsers = users.map((u, index) => <li key={index}> {u.name}</li>);
    return (
        <div className="App">

         <NavLink to={'/'}>main</NavLink>-----
         <NavLink to={'/login'}>login</NavLink>-----
         <NavLink to={'/profile'}>profile</NavLink>----
         <NavLink to={'/profile/setting'}>profile</NavLink>
<Routes>
    <Route path={'/*'} element={<div>404</div>}/>
    <Route path={'/'} element={<div>main</div>}/>
    <Route path={'login'} element={<div>login</div>}/>
    <Route path={'/profile'} element={<div>profile</div>}/>
    <Route path={'/profile/setting'} element={<div>setting</div>}/>


</Routes>
        </div>
    );
}

export default App;
