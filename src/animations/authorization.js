import anime from "animejs";

const signInAnimation = {
  out: () => {
    anime
      .timeline({
        targets: ".sign-in__form, .sign-in__picture",
      })
      .add({
        opacity: [1, 0],
        translateY: [0, 100],
        duration: 900,
        easing: "easeOutCirc",
      })
      .add(
        {
          targets: ".sign-in__picture",
          opacity: [1, 0],
          translateY: [0, -100],
          duration: 900,
          easing: "easeOutCirc",
        },
        0
      );
  },
  in: () => {
    anime
      .timeline({
        targets: ".sign-in__form, .sign-in__picture",
      })
      .add({
        opacity: [0, 1],
        translateY: [-100, 0],
        duration: 1000,
        delay: 400,
        easing: "easeOutCirc",
      })
      .add(
        {
          targets: ".sign-in__picture",
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 1000,
          delay: 400,
          easing: "easeOutCirc",
        },
        0
      );
  },
  exit: () => {
    anime({
      targets: ".sign-in",
      opacity: [1, 0],
      translateX: [0, -200],
      duration: 1000,
      easing: "easeOutCirc",
    });
  },
};

const signUpAnimation = {
  out: () => {
    anime
      .timeline({
        targets: ".sign-up__form, .sign-up__picture",
      })
      .add({
        opacity: [1, 0],
        translateY: [0, -100],
        duration: 900,
        easing: "easeOutCirc",
      })
      .add(
        {
          targets: ".sign-up__picture",
          opacity: [1, 0],
          translateY: [0, 100],
          duration: 900,
          easing: "easeOutCirc",
        },
        0
      );
  },
  in: () => {
    anime
      .timeline({
        targets: ".sign-up__form, .sign-up__picture",
      })
      .add({
        opacity: [0, 1],
        translateY: [100, 0],
        duration: 1000,
        delay: 400,
        easing: "easeOutCirc",
      })
      .add(
        {
          targets: ".sign-up__picture",
          opacity: [0, 1],
          translateY: [-100, 0],
          duration: 1000,
          delay: 400,
          easing: "easeOutCirc",
        },
        0
      );
  },
  exit: () => {
    anime({
      targets: ".sign-up",
      opacity: [1, 0],
      translateX: [0, -200],
      duration: 1000,
      easing: "easeOutCirc",
    });
  },
};

export { signInAnimation, signUpAnimation };
