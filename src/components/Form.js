import { useState } from "react";

function Form() {
  function Register(e) {
    e.preventDefault();
    console.log(`The user of name ${name} and password ${password}`)
    
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <h1>My Register</h1>
      <form onSubmit={Register}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          type="text" 
          placeholder="Your name" 
          id="name" 
          name="name" 
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Your best password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="register" />
        </div>
      </form>
    </div>
  );
}

export default Form;
