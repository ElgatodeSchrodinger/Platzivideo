import React from 'react';
import { render } from 'react-dom';
import '../assets/styles/App.scss';
class Button extends React.Component {
    state = {
        count:0,
    };
    handleClick = ()=> {
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        const count = this.state.count;
        return(
            <div>
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleClick}>Click</button>
            </div>
        );
    };
}


/*
const Button = props => {
    // const namebutton = props
    return(
        <div>
            <button type="button">{props.name}</button>
        </div>
    );
};*/

export default Button;