import React from 'react'
import './App.css'

export default function App() {
    const click=()=>{
        console.log("click event");
    }
    return (
        <div className="app">
            <h1>welcome</h1>
            <button onClick={click}>click</button>
        </div>
    )
}
