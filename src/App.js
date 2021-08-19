import React, { useState } from "react";
import './Style.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  function submitForm(e) {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
  }
  return (
    <div className="center">
      <form onSubmit={submitForm}>
        <div className="heading">
          <h1>Login Form</h1>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <br />
        <div>
          {
            allEntry.map((value, index)=>{
              return (
                <div key="value">
                  <p>{index} Email: {value.email}</p>
                  <p>{index} Password: {value.password}</p>
                </div>
              )
            })
          }
        </div>
      </form>
    </div>
  );
}
export default App;

