import anime from "animejs";

const signIn__formOut = anime({
  targets: ".sign-in__form",
  opacity: [1, 0],
  translateY: [0, 100],
  duration: 900,
  easing: "easeOutCirc",
});
const signIn__pictureOut = anime({
  targets: ".sign-in__picture",
  opacity: [1, 0],
  translateY: [0, -100],
  duration: 900,
  easing: "easeOutCirc",
});

export { signIn__formOut, signIn__pictureOut };
