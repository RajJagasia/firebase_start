import React from "react";
//firebase stuff
import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";

function Login() {
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

  function handleSubmit2() {
    console.log("Username : " + username);
    console.log("Password : " + password);
    console.log("Email : " + email);
  }

  function handleGoogleSubmit() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  //firebase stuff below

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function handleSubmit() {
    signInWithEmailAndPassword(auth, email, password)
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
        <br />

        <button onClick={handleGoogleSubmit}>Sign In With Google</button>
      </div>
    </div>
  );
}

export default Login;
