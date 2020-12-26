import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import HolaMundo from './components/HolaMundo';
import Button from './components/Button';
// ReactDOM.render(<HelloWorld />, document.getElementById('app'))
// ReactDOM.render(<HolaMundo></HolaMundo>, document.getElementById('app'))
ReactDOM.render(<Button name="GO!"/>, document.getElementById('app'))