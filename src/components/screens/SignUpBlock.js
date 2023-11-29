import CornerElement from "../elements/CornerElement";
import anime from "animejs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as AddUserIcon } from "@icons/users/AddUserIcon.svg";
import { ReactComponent as ArrowRight } from "@icons/system/ArrowRight.svg";
import { ReactComponent as FemaleIcon } from "@icons/users/FemaleIcon.svg";
import { ReactComponent as MaleIcon } from "@icons/users/MaleIcon.svg";

export default function SignUpBlock({ refs: { signInRef, signUpRef } }) {
  const navigate = useNavigate();

  useEffect(() => {
    anime({
      targets: ".sign-up__picture",
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
    anime({
      targets: ".sign-up__form",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: "easeOutCirc",
    });
  }, []);

  return (
    <div ref={signUpRef} className="sign-up d-none p-20 gap-20">
      <div className="sign-up__picture flex-1">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
          alt="sign-up__picture"
        />
        <CornerElement />
        <CornerElement />
        <div className="sign-up__back-btn-block">
          <button onClick={() => navigate("/")}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <form className="sign-up__form d-flex fdc jcc aic gap-10 flex-1">
        <p className="form__title  mb-20">Create account</p>
        <input id="name" type="text" placeholder="Type your name.." />
        <input id="email" type="email" placeholder="Type your email.." />
        <input id="password" type="text" placeholder="Type your password.." />
        <div className="form__gender">
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
          id="age"
          type="number"
          min={16}
          max={120}
          placeholder="Type your age.."
        />
        <input id="country" type="text" placeholder="Type your country.." />
        <button className="form__btn" onClick={() => navigate("/storage")}>
          Create account <AddUserIcon />
        </button>
        <div className="form__link d-flex fdr jcc aic">
          Already have an account?&nbsp;
          <span
            onClick={() => {
              anime({
                targets: ".sign-up__picture",
                opacity: [1, 0],
                translateY: [0, 100],
                duration: 1000,
                easing: "easeOutCirc",
              });
              anime({
                targets: ".sign-up__form",
                opacity: [1, 0],
                translateY: [0, -100],
                duration: 1000,
                easing: "easeOutCirc",
              });

              setTimeout(() => {
                signUpRef.current.className =
                  signUpRef.current.className.replace("d-flex", "d-none");
                signInRef.current.className =
                  signInRef.current.className.replace("d-none", "d-flex");
              }, 1000);
            }}
          >
            Log in
          </span>
        </div>
      </form>
    </div>
  );
}
