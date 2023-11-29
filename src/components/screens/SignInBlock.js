import CornerElement from "../elements/CornerElement";
import anime from "animejs";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowRight } from "@icons/system/ArrowRight.svg";
import { ReactComponent as SignInIcon } from "@icons/do/SignInIcon.svg";

export default function SignInBlock({ refs: { signInRef, signUpRef } }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (data.email !== "admin@gmail.com" && data.password !== "Admin123") {
      alert("Invalid user");
      console.log(errors);
      return;
    }

    anime({
      targets: ".sign-in",
      opacity: [1, 0],
      translateX: [0, -200],
      duration: 1000,
      easing: "easeOutCirc",
    });

    setTimeout(() => {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          name: "Oleksandr",
          email: "admin@gmail.com",
          password: "Admin123",
          gender: "male",
          age: "21",
          country: "Ukrain",
        })
      );
      navigate("/home");
    }, 1000);
  };

  return (
    <div ref={signInRef} className="sign-in d-flex p-20 gap-20">
      <form
        className="sign-in__form d-flex fdc jcc aic gap-10 flex-1"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="form__title mb-20">Login to your account</p>
        <input
          type="text"
          placeholder="Type your email..."
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          })}
        />
        <input
          type="text"
          placeholder="Type your password..."
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
          })}
        />
        <button className="form__btn" type="submit">
          Log in
          <SignInIcon />
        </button>
        <div className="form__link d-flex fdr jcc aic">
          New to App?&nbsp;
          <span
            onClick={() => {
              anime({
                targets: ".sign-in__form",
                opacity: [1, 0],
                translateY: [0, 100],
                duration: 900,
                easing: "easeOutCirc",
              });
              anime({
                targets: ".sign-in__picture",
                opacity: [1, 0],
                translateY: [0, -100],
                duration: 900,
                easing: "easeOutCirc",
              });

              signUpRef.current.className = signUpRef.current.className.replace(
                "d-none",
                "d-flex"
              );

              anime({
                targets: ".sign-up__picture",
                opacity: [0, 1],
                translateY: [-100, 0],
                duration: 1000,
                delay: 400,
                easing: "easeOutCirc",
              });
              anime({
                targets: ".sign-up__form",
                opacity: [0, 1],
                translateY: [100, 0],
                duration: 1000,
                delay: 400,
                easing: "easeOutCirc",
              });

              setTimeout(() => {
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
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
