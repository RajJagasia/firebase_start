import React from "react";
import Login from "./Login";
import Register from "./Register";
import app from "./firebaseConfig";
import AddingDoc from "./AddingDoc";

function App() {
  return (
    <div>
      {/* <Login />
      <Register /> */}
      <AddingDoc />
    </div>
  );
}

export default App;
