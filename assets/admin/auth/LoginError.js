import React from "react";
import classes from './LoginError.module.css';
function LoginError(){
    return(
        <div className={classes.effect}>
            <h4 className="font-weight-bold">Wrong Email or Password</h4>
        </div>
    );
}
export default LoginError;