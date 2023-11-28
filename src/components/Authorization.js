import { useRef } from "react";
import SignInBlock from "./screens/SignInBlock";
import SignUpBlock from "./screens/SignUpBlock";

import "./../styles/Authorization.css";

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
