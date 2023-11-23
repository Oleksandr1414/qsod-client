import anime from "animejs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackButton } from "./../../assets/BackButton.svg";
// import { ReactComponent as GoogleIcon } from "./../../assets/social_icons/GoogleIcon.svg";
import { ReactComponent as Corner } from "./../../assets/Corner.svg";
import { ReactComponent as LoginIcon } from "./../../assets/auth-page/LoginIcon.svg";

export default function Login({ changePageFunc }) {
  const navigate = useNavigate();

  useEffect(() => {
    anime({
      targets: ".auth-picture-container",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
    anime({
      targets: ".login-form",
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
  }, []);

  const outAnimationForm = anime({
    targets: ".login-form",
    opacity: [1, 0],
    translateY: [0, 100],
    duration: 1000,
    easing: "easeOutCirc",
  });
  const outAnimationAuth = anime({
    targets: ".auth-picture-container",
    opacity: [1, 0],
    translateY: [0, -100],
    duration: 1000,
    easing: "easeOutCirc",
  });

  return (
    <>
      <form action="#" className="login-form">
        <p className="auth-title">Login to Your Account</p>
        <input id="email" type="email" placeholder="Type your email.." />
        <input id="password" type="text" placeholder="Type your password..." />
        <button onClick={() => navigate("/home")}>
          Log in
          <LoginIcon />
        </button>
        <div className="link-to">
          New to App?&nbsp;
          <button
            onClick={() => {
              outAnimationAuth.play();
              outAnimationForm.play();

              setTimeout(() => {
                changePageFunc(false);
              }, 1050);
            }}
          >
            Create an account
          </button>
        </div>
        {/* <span>or</span>
      <hr />
      <div className="social-container">
        <GoogleIcon /> login with Google6
      </div> */}
      </form>
      <div className="auth-picture-container">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
          alt=""
        />
        <Corner />
        <Corner />
        <div className="back-button">
          <button onClick={() => navigate("/")}>
            <BackButton />
          </button>
        </div>
      </div>
    </>
  );
}
