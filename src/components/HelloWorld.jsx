import React from 'react';
import { render } from 'react-dom';

export default class CurTime extends React.Component {
    state = {
        curTime: new Date().toLocaleString(),
    } 
    render() {
        const { curTime } = this.state
        return (
            <div>
                <h1>{curTime}</h1>
            </div>
        )
    }
    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
    }
   
}


// const HelloWorld = () => 
//     (
//         <div>
//             <h1>Hola Mundo</h1>
//         </div>
//     )
// ;

// export default HelloWorld;