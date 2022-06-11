import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Wrapper from "../../wrapper/Wrapper";
import classes from "./Register.module.css";

function Register(props) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function registerHandler(e) {
    e.preventDefault();

    const emailData = emailRef.current.value;
    const passwordData = passwordRef.current.value;

    const userCrediantials = {
      email: emailData,
      password: passwordData,
    };

    fetch("http://localhost:8000/register-new-user", {
      method: "POST",
      body: JSON.stringify(userCrediantials),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Wrapper>
      <Card>
        <div className={classes.loginFormWrapper}>
          <h2>Register</h2>
          <form onSubmit={registerHandler}>
            <div className={classes.formdiv}>
              <label>Email</label>
              <input
                type="text"
                className={classes.addpostinputs}
                ref={emailRef}
              />
            </div>
            <div className={classes.formdiv}>
              <label>Password</label>
              <input
                type="password"
                className={classes.addpostinputs}
                ref={passwordRef}
              />
            </div>
            <div className={classes.formdiv}>
              <button className={classes.btn}>Register</button>
            </div>
          </form>
          <p className="mt-2">
            If have account then
            <Link to="/login">Click Here</Link>
          </p>
        </div>
      </Card>
    </Wrapper>
  );
}
export default Register;
