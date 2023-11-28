import CornerElement from "../elements/CornerElement";
import anime from "animejs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackButton } from "./../../assets/BackButton.svg";
import { ReactComponent as LoginIcon } from "./../../assets/auth-page/LoginIcon.svg";

export default function SignInBlock({ refs: { signInRef, signUpRef } }) {
  const navigate = useNavigate();

  useEffect(() => {
    anime({
      targets: ".sign-in__picture",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
    anime({
      targets: ".sign-in__form",
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
  }, []);

  return (
    <div ref={signInRef} className="sign-in d-flex p-20 gap-20">
      <form className="sign-in__form d-flex fdc jcc aic gap-10 flex-1">
        <p className="form__title mb-20">Login to your account</p>
        <input id="email" type="email" placeholder="Type your email.." />
        <input id="password" type="text" placeholder="Type your password..." />
        <button className="form__btn" onClick={() => navigate("/home")}>
          Log in
          <LoginIcon />
        </button>
        <div className="form__link d-flex fdr jcc aic">
          New to App?&nbsp;
          <span
            onClick={() => {
              anime({
                targets: ".sign-in__form",
                opacity: [1, 0],
                translateY: [0, 100],
                duration: 1000,
                easing: "easeOutCirc",
              });
              anime({
                targets: ".sign-in__picture",
                opacity: [1, 0],
                translateY: [0, -100],
                duration: 1000,
                easing: "easeOutCirc",
              });

              setTimeout(() => {
                signUpRef.current.className =
                  signUpRef.current.className.replace("d-none", "d-flex");
                signInRef.current.className =
                  signInRef.current.className.replace("d-flex", "d-none");
              }, 1000);
            }}
          >
            Create an account
          </span>
        </div>
      </form>
      <div className="sign-in__picture flex-1">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
          alt="sign-in__picture"
        />
        <CornerElement />
        <CornerElement />
        <div className="sign-in__back-btn-block">
          <button onClick={() => navigate("/")}>
            <BackButton />
          </button>
        </div>
      </div>
    </div>
  );
}
