import React from "react";
//firebase stuff
import { app, db } from "./firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

function AddingDoc() {
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
  const collectionRef = collection(db, "users");
  const auth = getAuth();

  function handleSubmit() {
    addDoc(collectionRef, {
      email: email,
      password: password,
      username: username
    })
      .then((data) => {
        alert("Data Added" + data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="container">
      <h1> Login </h1>
      <div className="form">
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
        <br />

        <button onClick={handleSubmit}>Login</button>
        <br />
      </div>
    </div>
  );
}

export default AddingDoc;
