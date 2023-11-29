import CornerElement from "@components/elements/CornerElement";
import DatalistElement from "@components/elements/DatalistElement";
import anime from "animejs";
import { globalConstants } from "../../_helpers/constants";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ReactComponent as AddUserIcon } from "@icons/users/AddUserIcon.svg";
import { ReactComponent as ArrowRight } from "@icons/system/ArrowRight.svg";
import { ReactComponent as FemaleIcon } from "@icons/users/FemaleIcon.svg";
import { ReactComponent as MaleIcon } from "@icons/users/MaleIcon.svg";

export default function SignUpBlock({ refs: { signInRef, signUpRef } }) {
  const navigate = useNavigate();

  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);

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
  errors && console.log("ERROR: ", errors);

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
      <FormProvider {...methods}>
        <form
          className="sign-up__form d-flex fdc jcc aic gap-10 flex-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="form__title  mb-20">Create account</p>
          <input
            type="text"
            placeholder="Type your name..."
            {...register("name", {
              required: true,
              maxLength: 16,
              pattern: /^[A-Z]+$/i,
            })}
          />
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
              pattern:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
            })}
          />
          <div className="form__gender">
            <div>
              <label htmlFor="gender">
                Male
                <MaleIcon />
              </label>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="male"
              />
            </div>
            <div>
              <label htmlFor="gender">
                Female
                <FemaleIcon />
              </label>
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="female"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Type your age..."
            {...register("age", { required: true, min: 16, max: 99 })}
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
