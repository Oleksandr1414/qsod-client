import React, { useRef } from "react";

import "./../styles/screens/Authorization.css";

const SignInBlock = React.lazy(() => import("./screens/SignInBlock"));
const SignUpBlock = React.lazy(() => import("./screens/SignUpBlock"));

export default function Auth() {
  const signInBlockRef = useRef(null);
  const signUpBlockRef = useRef(null);

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
