import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';

//const saludo = <h1>Hola a todos! </h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={ 100 } />, divRoot);