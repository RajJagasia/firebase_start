import React from "react";

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

  function handleSubmit() {
    console.log("Username : " + username);
    console.log("Password : " + password);
    console.log("Email : " + email);
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

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;
