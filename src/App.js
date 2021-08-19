import React, { useState } from "react";

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
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          {
            allEntry.map((value)=>{
              return (
                <div>
                  <p>Email: {value.email}</p>
                  <p>Password: {value.password}</p>
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
