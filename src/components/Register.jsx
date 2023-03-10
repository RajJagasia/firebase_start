import React from "react";
//firebase stuff
import { app, db } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleInput(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const eventName = event.target.name;
    if (eventName === "username") {
      setUsername(event.target.value);
    } else if (eventName === "password") {
      setPassword(event.target.value);
    } else if (eventName === "email") {
      setEmail(event.target.value);
    }
  }

  //firebase stuff below

  const auth = getAuth();

  function handleSubmit() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // console.log(error);
        // console.log(errorCode);
        // console.log(errorMessage);

        // ..
      });
  }
  return (
    <div className="container">
      <h1> Register </h1>
      <div className="form">
        <input type="text" placeholder="Name" />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInput}
          value={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInput}
          value={email}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInput}
          value={password}
        />
        <input type="phone" placeholder="Phone" />

        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default Register;
