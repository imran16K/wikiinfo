import React, { Fragment } from "react";
import spinner from './Bean Eater-1s-200px.gif';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }}/>
        </Fragment>
    )
};

export default Spinner;