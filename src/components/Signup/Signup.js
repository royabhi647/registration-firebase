import React, { useState } from "react";
import InputControl from "../../InputControl/InputControl";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase";

function Signup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtondisabled] = useState(false);

  const handleSignUp = () => {
    if (!values.name || !values.email || !values.password) {
      setError(true);
      setErrorMsg("Fill all fields");
    }
    setTimeout(() => {
      setError(false);
      setErrorMsg("");
      setSubmitButtondisabled(false);
    }, 3000);

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitButtondisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/login");
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
        <h1 className={styles.heading}>Signup</h1>

        <InputControl
          label="Name"
          placeHolder="Enter your name"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeHolder="Enter email address"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeHolder="Enter your password"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={styles.footer}>
          {error && <b className={styles.error}>{errorMsg}</b>}

          <button onClick={handleSignUp} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
