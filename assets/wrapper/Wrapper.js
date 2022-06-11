import React from 'react';
import classes from './Wrapper.module.css';
function Wrapper(props){
    return(
        <main className={classes.wrapper}>{props.children}</main>
    );
}
export default Wrapper;