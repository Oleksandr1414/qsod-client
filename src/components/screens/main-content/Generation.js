import MiniRecipeElement from "@components/elements/MiniRecipeElement.js";
import SelectElement from "@components/elements/SelectElement";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
import { userData } from "@data/user.js";
import { useState } from "react";

import "@styles/screens/main-content/Generation.css";

import bgImageColor from "@images/bgImageColor.png";

import { ReactComponent as MagniferIcon } from "@icons/do/MagniferIcon.svg";

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

  const [isShowRecipes, setIsShowRecipes] = useState(false);

  return (
    <div className="main-container generation-container">
      <div
        className="generation-options-container"
        style={
          isShowRecipes
            ? {
                justifyContent: "flex-start",
                paddingTop: 20,
                height: "max-content",
              }
            : {}
        }
      >
        <img
          src={bgImageColor}
          alt="generation__picture"
          style={isShowRecipes ? { height: "150px" } : {}}
        />
        <p
          className="generation-options-title letters"
          style={isShowRecipes ? { display: "none" } : {}}
        >
          Generate recipes
        </p>
        <p
          className="generation-options-subtitle"
          style={isShowRecipes ? { display: "none" } : {}}
        >
          Generate a recipe based on your preferences and capabilities
        </p>
        <div
          className="option-block"
          style={
            isShowRecipes
              ? { boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }
              : {}
          }
        >
          <div className="option-inputs">
            <div className="option-input">
              <SelectElement
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
              <SelectElement
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
            <button onClick={() => setIsShowRecipes(true)}>
              Generate <MagniferIcon />
            </button>
          </div>
        </div>
      </div>
      {isShowRecipes ? (
        <div className="generation-results">
          {userData.history.slice(0, 3).map((id) => (
            <MiniRecipeElement
              id={id}
              key={id}
              cornerColor="gray"
              showInfo={true}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
