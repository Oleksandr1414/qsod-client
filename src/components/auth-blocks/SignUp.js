import anime from "animejs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackButton } from "./../../assets/BackButton.svg";
import { ReactComponent as MaleIcon } from "./../../assets/genders/MaleIcon.svg";
import { ReactComponent as FemaleIcon } from "./../../assets/genders/FemaleIcon.svg";
import { ReactComponent as Corner } from "./../../assets/Corner.svg";
import { ReactComponent as AddUserIcon } from "./../../assets/auth-page/AddUserIcon.svg";

export default function SignUp({ changePageFunc }) {
  const navigate = useNavigate();

  useEffect(() => {
    anime({
      targets: ".auth-picture-container",
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
    anime({
      targets: ".login-form",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
  }, []);

  const outAnimationForm = anime({
    targets: ".login-form",
    opacity: [1, 0],
    translateY: [0, -100],
    duration: 1000,
    easing: "easeOutCirc",
  });
  const outAnimationAuth = anime({
    targets: ".auth-picture-container",
    opacity: [1, 0],
    translateY: [0, 100],
    duration: 1000,
    easing: "easeOutCirc",
  });

  return (
    <>
      <div className="auth-picture-container sign-in">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
          alt=""
        />
        <Corner />
        <Corner />
        <div className="back-button sign-in-back-button">
          <button onClick={() => navigate("/")}>
            <BackButton />
          </button>
        </div>
      </div>
      <form action="#" className="login-form sign-in-form">
        <p className="auth-title">Create account</p>
        <input id="name" type="text" placeholder="Type your name.." />
        <input id="email" type="email" placeholder="Type your email.." />
        <input id="password" type="text" placeholder="Type your password.." />
        <div className="gender-container">
          <div>
            <label htmlFor="gender">
              Male
              <MaleIcon />
            </label>
            <input name="gender" id="male" type="radio" />
          </div>
          <div>
            <label htmlFor="gender">
              Female
              <FemaleIcon />
            </label>
            <input name="gender" id="female" type="radio" />
          </div>
        </div>
        <input
          id="date"
          type="number"
          min={16}
          max={120}
          placeholder="Type your age.."
        />
        <input id="country" type="text" placeholder="Type your country.." />
        <button className="default-button" onClick={() => navigate("/storage")}>
          Create account <AddUserIcon />
        </button>
        <div className="link-to">
          Already have an account?&nbsp;
          <button
            onClick={() => {
              outAnimationAuth.play();
              outAnimationForm.play();

              setTimeout(() => {
                changePageFunc(true);
              }, 1050);
            }}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
