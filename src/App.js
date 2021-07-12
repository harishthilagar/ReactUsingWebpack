import React from 'react'

export default function App() {
    const click=()=>{
        console.log("click event");
    }
    return (
        <div>
            <h1>welcome</h1>
            <button onClick={click}>click</button>
        </div>
    )
}
