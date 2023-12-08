import { recipes } from "@data/recipes";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

import "@styles/screens/main-content/Recipe.css";

import bgImageColor from "@images/bgImageColor.png";

import { ReactComponent as Play } from "@icons/actions/Play.svg";
import { ReactComponent as Stop } from "@icons/actions/Stop.svg";
import { ReactComponent as TimeIcon } from "@icons/recipe/TimeIcon.svg";

export default function Recipe() {
  const [isImerStart, setIsImerStart] = useState(false);
  const { pathname } = useLocation();

  const [intervalId, setIntervalId] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const getTimeView = useMemo(() => {
    const minutes = Math.round(currentTime / 60);
    const seconds = Math.round(currentTime % 60);

    return `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }`;
  }, [currentTime]);

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
    <div className="main-container recipe-container mt-70">
      {recipeInfo ? (
        <>
          <div className="recipe-components">
            <div className="recipe-picture">
              <img alt="recipe__picture" src={bgImageColor} />
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
              <div className="timer">{getTimeView}</div>
              {isImerStart ? (
                <button
                  className="stop"
                  onClick={() => {
                    setIsImerStart(false);
                    console.log(intervalId);
                    clearInterval(intervalId);
                  }}
                >
                  Stop <Stop />
                </button>
              ) : (
                <button
                  className="start"
                  onClick={() => {
                    setIsImerStart(true);
                    setCurrentTime(0);
                    setIntervalId(
                      setInterval(
                        () => setCurrentTime((prev) => prev + 1),
                        1000
                      )
                    );
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
