import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

const CounterApp = ( { value} ) => {
    return (
        <>
            <h1> CounterApp </h1>
            {/* <pre> { JSON.stringify( saludo, null, 3 ) } </pre> */}
            <h2> {value} </h2>
        </> 
    );

}

CounterApp.propTypes = {
    value: PropTypes.number
    
}

CounterApp.defaultProps = {
    value: '000'
}

export default CounterApp;