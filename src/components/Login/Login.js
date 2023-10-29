import React, { useState } from "react";
import InputControl from "../../InputControl/InputControl";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtondisabled] = useState(false);

  const handleLogin = () => {
    if (!values.email || !values.password) {
      setError(true);
      setErrorMsg("Fill all fields");
    }
    setTimeout(() => {
      setError(false);
      setErrorMsg("");
      setSubmitButtondisabled(false);
    }, 3000);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        setSubmitButtondisabled(false);
        setError(false);
        setErrorMsg("");
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtondisabled(true);
        setError(true);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeHolder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, password: event.target.value }))
          }
          placeHolder="Enter your password"
        />

        <div className={styles.footer}>
          {error && <b className={styles.error}>{errorMsg}</b>}

          <button disabled={submitButtonDisabled} onClick={handleLogin}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
