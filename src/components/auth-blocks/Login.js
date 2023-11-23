import anime from "animejs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Auth.css";

import { ReactComponent as BackButton } from "./../../assets/BackButton.svg";
import { ReactComponent as Corner } from "./../../assets/Corner.svg";
import { ReactComponent as LoginIcon } from "./../../assets/auth-page/LoginIcon.svg";

export default function Login() {
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

  return (
    <div className="auth-container">
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
          <div
            onClick={() => {
              anime({
                targets: ".login-form",
                opacity: [1, 0],
                translateY: [0, 100],
                duration: 1000,
                easing: "easeOutCirc",
              });
              anime({
                targets: ".auth-picture-container",
                opacity: [1, 0],
                translateY: [0, -100],
                duration: 1000,
                easing: "easeOutCirc",
              });

              setTimeout(() => {
                navigate("/signup");
              }, 1000);
            }}
          >
            Create an account
          </div>
        </div>
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
    </div>
  );
}
