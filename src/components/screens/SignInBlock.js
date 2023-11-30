import CornerElement from "../elements/CornerElement";
import { signInAnimation, signUpAnimation } from "@animations/authorization";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import bgImageColor from "@images/bgImageColor.png";

import { ReactComponent as ArrowRight } from "@icons/system/ArrowRight.svg";
import { ReactComponent as PasswordHideIcon } from "@icons/system/PasswordHideIcon.svg";
import { ReactComponent as PasswordShowIcon } from "@icons/system/PasswordShowIcon.svg";
import { ReactComponent as SignInIcon } from "@icons/do/SignInIcon.svg";

export default function SignInBlock({ refs: { signInRef, signUpRef } }) {
  const navigate = useNavigate();
  const [isHidePassword, setIsHidePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const notify = (message) => {
    toast.dismiss();
    toast.error(message, {
      position: "top-left",
      autoClose: 5000,
      icon: false,
      closeButton: false,
      pauseOnFocusLoss: false,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (errors.email) {
      notify(errors.email.message);
      return;
    }
    if (errors.password) {
      notify(errors.password.message);
      return;
    }
  }, [Object.keys(errors).length]);

  const onSubmit = (data) => {
    toast.dismiss();

    if (data.email !== "admin@gmail.com" && data.password !== "Admin123") {
      notify("Incorrect email or password.");
      return;
    }
    signInAnimation.exit();

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
        autoComplete="off"
      >
        <p className="form__title mb-20">Login to your account</p>
        <input
          type="text"
          placeholder="Type your email..."
          className={errors.email && "error"}
          {...register("email", {
            required: "The email is a required field.",
          })}
          autoFocus
        />
        <div className="input__password">
          <input
            type={isHidePassword ? "text" : "password"}
            placeholder="Type your password..."
            className={errors.email && "error"}
            {...register("password", {
              required: "The password is a required field.",
            })}
          />
          {isHidePassword ? (
            <PasswordHideIcon onClick={() => setIsHidePassword(false)} />
          ) : (
            <PasswordShowIcon onClick={() => setIsHidePassword(true)} />
          )}
        </div>
        <button className="form__btn" type="submit">
          Log in
          <SignInIcon />
        </button>
        <div className="form__link d-flex fdr jcc aic">
          New to App?&nbsp;
          <span
            onClick={() => {
              toast.dismiss();

              signInAnimation.out();
              signUpRef.current.className = signUpRef.current.className.replace(
                "d-none",
                "d-flex"
              );
              signUpAnimation.in();

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
        <img src={bgImageColor} alt="sign-in__picture" />
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
