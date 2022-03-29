import { useState } from "react";

function Conditional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function Send(e) {
    e.preventDefault();
    setUserEmail(email);
  }
  function ClearEmail() {
    setUserEmail("");
  }
  return (
    <div>
      <h2>Send your e-mail</h2>
      <form>
        <input
          type="text"
          placeholder="Write your best e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={Send}>
          Send e-mail
        </button>
      </form>
      {userEmail && (
        <div>
          <p>This user email is: {userEmail}</p>
          <button onClick={ClearEmail}>Clear e-mail</button>
        </div>
      )}
    </div>
  );
}

export default Conditional;
