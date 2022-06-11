import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Wrapper from "../../wrapper/Wrapper";
import classes from "./Login.module.css";
import LoginError from "./LoginError";

function Login(props) {
  const [isLoggedError, setLoggedError] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const emailData = emailRef.current.value;
    const passwordData = passwordRef.current.value;

    const userCrediantials = {
      email: emailData,
      password: passwordData,
    };

    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCrediantials),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.logInError == true) {
          console.log('Eroor');
          setLoggedError(true);
        }else{
          localStorage.setItem('token', data.token)
          navigate('/admin');
          setLoggedError(false);
        }
      });
  }

  return (
    <Wrapper>
      <Card>
      {isLoggedError && <LoginError />}
        <div className={classes.loginFormWrapper}>
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
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
              <button className={classes.btn}>Login</button>
            </div>
          </form>
          <p className="mt-2">
            New User?
            <Link to="/register-new-user">Click Here</Link>
          </p>
        </div>
      </Card>
    </Wrapper>
  );
}
export default Login;
