import anime from "animejs";

import "./../../styles/main-blocks/Generation.css";

import { ReactComponent as MagniferIcon } from "./../../assets/generation/MagniferIcon.svg";
import CustomSelect from "../custom-select/CustomSelect";

export default function Generation() {
  // anime({
  //   targets: ".generation-options-container > img",
  //   height: [0, "calc(100svh - 80px)"],
  //   duration: 1500,
  //   delay: 200,
  //   easing: "easeInOutQuad",
  // });

  // const tl = anime.timeline({
  //   easing: "easeOutCubic",
  //   duration: 1000,
  // });

  // tl.add({
  //   targets: ".option-block",
  //   width: [0, 915],
  //   padding: [0, 20],
  //   delay: 1000,
  // }).add({
  //   targets: ".option-block > *",
  //   opacity: [0, 1],
  // });

  return (
    <div className="main-container generation-container">
      <div className="generation-options-container">
        <img
          src="https://www.ulcdn.net/media/collection%20and%20listing/Provides_additional_breathing_room.jpg?1690286896"
          alt=""
        />
        <p className="generation-options-title letters">Generate recipes</p>
        <p className="generation-options-subtitle">
          Generate a recipe based on your preferences and capabilities
        </p>
        <div className="option-block">
          <div className="option-inputs">
            <div className="option-input">
              <CustomSelect
                defaultName={"Time"}
                optionList={[
                  "Less than 20 minutes",
                  "20-40 minutes",
                  "More than 40 minutes",
                ]}
              />
              <p className="cooking-time">Avaible cooking time</p>
            </div>
            <div className="vertical-line"></div>
            <div className="option-input">
              <CustomSelect
                defaultName={"Type"}
                optionList={[
                  "Appetizers",
                  "Vegetable salads",
                  "Meat salads",
                  "Soups",
                  "Meat dishes",
                  "Fish dishes",
                  "Desserts",
                ]}
              />
              <p className="dishes-types">Type of dishes</p>
            </div>
          </div>
          <div className="option-search">
            <button>
              Generate <MagniferIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
