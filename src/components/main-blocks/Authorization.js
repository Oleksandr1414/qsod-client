import Login from "../auth-blocks/Login";
import SignUp from "../auth-blocks/SignUp";

import "./../../styles/Auth.css";

export default function Auth() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "50px 0",
      }}
    >
      <div className="container">
        <Login />
      </div>
      <div className="container">
        <SignUp />
      </div>
    </div>
  );
}
