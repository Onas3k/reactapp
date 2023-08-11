import "./App.css";
import { useState } from "react";

function LoginCapture() {
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [WelMsg, SetWelMsg] = useState("");
  const handleClick = (e) => {
    SetWelMsg(`Welcome ${FirstName} ${LastName}`);
    e.preventDefault();
  };

  return (
    <div>
      <form id="form" onSubmit={handleClick}>
        <label>First Name : </label>
        <input type="text" name="fName" onBlur={(e) => {SetFirstName(e.target.value)}
        }/>
        <br />
        <label>last Name : </label>
        <input
          type="text"
          name="lName"
          onBlur={(e) => {
            SetLastName(e.target.value);
          }}
        />
        <br />
        <input type="submit" />
<br />
<span>{WelMsg}</span>
      </form>
    </div>
  );
}

export default LoginCapture;
