import React from "react";

function Register() {
  return (
    <div className="container">
      <h1> Register </h1>
      <div className="form">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="email" placeholder="Email" />
        <input type="phone" placeholder="Phone" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Register;
