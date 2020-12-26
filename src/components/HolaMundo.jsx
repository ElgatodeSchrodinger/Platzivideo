import React from 'react'

const HolaMundo = () => {
    const Hello = "Hola Mundo!"
    const isTrue = false
    return(
        <div className="HolaMundo">
            <h1> {Hello}</h1>
            <h2> Curso esencial de React </h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h1> La variable es verdadera</h1> : <h2> La variable es falsa </h2>}
            {isTrue && <h2> Dije que era verdadera</h2>}
        </div>
    );
};
export default HolaMundo;