import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const names = ['Dim', 'Sveta', 'Katya', 'Victor', 'Ignat'];
    const users = [{name: 'Dim'}, {name: 'Sveta'}, {name: 'Katya'}, {name: 'Victor'}, {name: 'Ignat'}];
    const liElement = names.map((n, index) => <li key={index}> {n}</li>);
    const liUsers = users.map((u, index) => <li key={index}> {u.name}</li>);
    return (
        <div className="App">

            <ul>

                {liElement}

                {liUsers}


            </ul>
        </div>
    );
}

export default App;
