import CornerElement from "@components/elements/CornerElement";
import DatalistElement from "@components/elements/DatalistElement";
import anime from "animejs";
import { FormProvider, useForm } from "react-hook-form";
import { globalConstants } from "../../_helpers/constants";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import bgImageColor from "@images/bgImageColor.png";

import { ReactComponent as AddUserIcon } from "@icons/users/AddUserIcon.svg";
import { ReactComponent as ArrowRight } from "@icons/system/ArrowRight.svg";
import { ReactComponent as FemaleIcon } from "@icons/users/FemaleIcon.svg";
import { ReactComponent as MaleIcon } from "@icons/users/MaleIcon.svg";

export default function SignUpBlock({ refs: { signInRef, signUpRef } }) {
  const navigate = useNavigate();
  const [gender, setGender] = useState("male");
  const [isHidePassword, setIsHidePassword] = useState(false);

  const methods = useForm();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  const notify = (message) => {
    toast.dismiss();
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      icon: false,
      closeButton: false,
      pauseOnFocusLoss: false,
      theme: "colored",
    });
  };

  useEffect(() => {
    if (errors.name) {
      notify(errors.name.message);
      return;
    }
    if (errors.email) {
      notify(errors.email.message);
      return;
    }
    if (errors.password) {
      notify(errors.password.message);
      return;
    }
    if (errors.age) {
      notify(errors.age.message);
      return;
    }
    if (errors.country) {
      notify(errors.country.message);
      return;
    }
  }, [Object.keys(errors).length]);

  const onSubmit = (data) => {
    toast.dismiss();

    anime({
      targets: ".sign-up",
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
      navigate("/storage");
    }, 1000);
  };

  return (
    <div ref={signUpRef} className="sign-up d-none p-20 gap-20">
      <div className="sign-up__picture flex-1">
        <img src={bgImageColor} alt="sign-up__picture" />
        <CornerElement />
        <CornerElement />
        <div className="sign-up__back-btn-block">
          <button onClick={() => navigate("/")}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <FormProvider {...methods}>
        <form
          className="sign-up__form d-flex fdc jcc aic gap-10 flex-1"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <p className="form__title  mb-20">Create an account</p>
          <input
            type="text"
            placeholder="Type your name..."
            className={errors.name && "error"}
            {...register("name", {
              required: "The name is a required field.",
              maxLength: 16,
              pattern: /^[A-Z]+$/i,
            })}
          />
          <input
            type="text"
            placeholder="Type your email..."
            className={errors.email && "error"}
            {...register("email", {
              required: "The email is a required field.",
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <input
            type={isHidePassword ? "text" : "password"}
            placeholder="Type your password..."
            className={errors.password && "error"}
            {...register("password", {
              required: "The password is a required field.",
              pattern:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
            })}
          />
          <div className="form__gender">
            <div className="gender__input-container">
              <label
                htmlFor="gender"
                onClick={() => {
                  setGender("male");
                  setValue("gender", "male");
                }}
                className={gender === "male" ? "checked" : ""}
              >
                Male
                <MaleIcon />
              </label>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="male"
                checked={gender === "male"}
              />
            </div>
            <div className="gender__input-container">
              <label
                htmlFor="gender"
                onClick={() => {
                  setGender("female");
                  setValue("gender", "female");
                }}
                className={gender === "female" ? "checked" : ""}
              >
                Female
                <FemaleIcon />
              </label>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="female"
                checked={gender === "female"}
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Type your age..."
            className={errors.age && "error"}
            {...register("age", {
              required: "The age is a required field.",
              min: 16,
              max: 99,
            })}
          />
          <DatalistElement
            inputName="country"
            placeholder="Select your country..."
            dataList={globalConstants.countries}
          />
          <button className="form__btn" type="submit">
            Create account <AddUserIcon />
          </button>
          <div className="form__link d-flex fdr jcc aic">
            Already have an account?&nbsp;
            <span
              onClick={() => {
                toast.dismiss();

                anime({
                  targets: ".sign-up__picture",
                  opacity: [1, 0],
                  translateY: [0, 100],
                  duration: 900,
                  easing: "easeOutCirc",
                });
                anime({
                  targets: ".sign-up__form",
                  opacity: [1, 0],
                  translateY: [0, -100],
                  duration: 900,
                  easing: "easeOutCirc",
                });

                signInRef.current.className =
                  signInRef.current.className.replace("d-none", "d-flex");

                anime({
                  targets: ".sign-in__picture",
                  opacity: [0, 1],
                  translateY: [100, 0],
                  duration: 1000,
                  delay: 400,
                  easing: "easeOutCirc",
                });
                anime({
                  targets: ".sign-in__form",
                  opacity: [0, 1],
                  translateY: [-100, 0],
                  duration: 1000,
                  delay: 400,
                  easing: "easeOutCirc",
                });

                setTimeout(() => {
                  signUpRef.current.className =
                    signUpRef.current.className.replace("d-flex", "d-none");
                }, 1000);
              }}
            >
              Log in
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
