import { useNavigate } from "react-router-dom";
import { recipes } from "../../_helpers/data/recipes";

import "./../../styles/elements/MiniRecipeElement.css";

import { ReactComponent as LikeIcon } from "./../../assets/LikeIcon.svg";
import { ReactComponent as TimeIcon } from "./../../assets/TimeIcon.svg";
import { ReactComponent as Corner } from "./../../assets/Corner.svg";
import { ReactComponent as SquareIcon } from "./../../assets/recipe/SquareIcon.svg";

export default function MiniRecipeElement({ id, showInfo }) {
  const recipe = recipes[id];

  const navigate = useNavigate();

  return (
    <div className="recipe-block" onClick={() => navigate(`/recipe/${id}`)}>
      <Corner />
      <Corner />
      <div className="link-to-recipe">
        <button>
          <SquareIcon />
        </button>
      </div>
      <div className="recipe-image">
        <img src={recipe.image_url} alt="" />
        <span className="recipe-likes">
          <LikeIcon /> 55
        </span>
        <span className="recipe-time">
          <TimeIcon /> 20m
        </span>
      </div>
      {showInfo ? (
        <div className="recipe-info">
          <p className="recipe-name">{recipe.name}</p>
          <p className="recipe-description">{recipe.description}</p>
        </div>
      ) : null}
    </div>
  );
}
