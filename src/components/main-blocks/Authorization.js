import Login from "../auth-blocks/Login";
import SignUp from "../auth-blocks/SignUp";
import { useEffect, useState } from "react";

import "./../../styles/Auth.css";

export default function Auth() {
  const [isLoginPage, setIsLoginPage] = useState(true);

  useEffect(() => {
    setIsLoginPage(true);
  }, []);

  return (
    <>
      <div className="auth-container">
        {isLoginPage ? (
          <Login changePageFunc={setIsLoginPage} />
        ) : (
          <SignUp changePageFunc={setIsLoginPage} />
        )}
      </div>
    </>
  );
}
