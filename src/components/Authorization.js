import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "@styles/screens/Authorization.css";

const SignInBlock = React.lazy(() => import("./screens/SignInBlock"));
const SignUpBlock = React.lazy(() => import("./screens/SignUpBlock"));

export default function Auth({}) {
  const signInBlockRef = useRef(null);
  const signUpBlockRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      navigate("/authorization");
      return;
    }

    const { email, password } = JSON.parse(user);
    navigate(
      email === "admin@gmail.com" && password === "Admin123"
        ? "/home"
        : "/authorization"
    );
  }, []);

  return (
    <>
      <SignInBlock
        refs={{ signInRef: signInBlockRef, signUpRef: signUpBlockRef }}
      />
      <SignUpBlock
        refs={{ signInRef: signInBlockRef, signUpRef: signUpBlockRef }}
      />
    </>
  );
}
