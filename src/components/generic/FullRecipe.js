import { useMemo, useState } from "react";
import { recipes } from "../../_helpers/data/recipes";
import { useLocation } from "react-router-dom";

import "./../../styles/generic/FullRecipe.css";

import { ReactComponent as Play } from "./../../assets/actions/Play.svg";
import { ReactComponent as Stop } from "./../../assets/actions/Stop.svg";
import { ReactComponent as TimeIcon } from "./../../assets/TimeIcon.svg";

export default function FullRecipe() {
  const [isImerStart, setIsImerStart] = useState(false);
  const { pathname } = useLocation();

  const recipeInfo = useMemo(() => {
    if (!pathname) {
      return null;
    }

    return recipes[pathname.split("/")[2]];
  }, [pathname]);

  const formatRecipeSteps = useMemo(() => {
    if (!recipeInfo) {
      return null;
    }

    const lines = recipeInfo.formula.split("\n");
    const steps = [];

    for (const line of lines) {
      if (line.trim().startsWith("###")) {
        steps.push(
          <p key={Math.random() * 100} className="recipe-steps-header">
            {line.slice(3).trim()}
          </p>
        );
      } else {
        steps.push(<p key={Math.random() * 100}>{line}</p>);
      }
    }

    return <div className="recipe-steps">{steps}</div>;
  }, [recipeInfo]);

  return (
    <div className="main-container recipe-container">
      {recipeInfo ? (
        <>
          <div className="recipe-components">
            <div className="recipe-picture">
              <img
                alt=""
                src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
              />
            </div>
            <div className="recipe-ingredients">
              <p>List</p>
              <div className="recipe-ingredients-list">
                {recipeInfo.ingredients.map((i) => (
                  <div key={i.name} className="ingredients-list-item">
                    <span>ICON</span>
                    <div className="vertical-line"></div>
                    <p>{i.name}</p>
                    <div className="vertical-line"></div>
                    <span>{i.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="recipe-main">
            <div className="recipe-header">{recipeInfo.name}</div>
            <div className="recipe-main-content">
              <p>Step-by-step cooking plan:</p>
              {formatRecipeSteps}
            </div>
          </div>
          <div className="recipe-option">
            <div className="recipe-controller">
              <TimeIcon />
              <div className="timer">00:00</div>
              {isImerStart ? (
                <button
                  className="stop"
                  onClick={() => {
                    setIsImerStart(false);
                  }}
                >
                  Stop <Stop />
                </button>
              ) : (
                <button
                  className="start"
                  onClick={() => {
                    setIsImerStart(true);
                  }}
                >
                  Start <Play />
                </button>
              )}
            </div>
            <div className="recipe-more"></div>
          </div>
        </>
      ) : (
        "Recipe not found"
      )}
    </div>
  );
}
