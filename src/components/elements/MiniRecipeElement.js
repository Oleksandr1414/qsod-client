import { recipes } from "@data/recipes";
import { useNavigate } from "react-router-dom";

import "@styles/elements/MiniRecipeElement.css";

import { ReactComponent as Corner } from "@icons/system/Corner.svg";
import { ReactComponent as LikeIcon } from "@icons/do/LikeIcon.svg";
import { ReactComponent as OpenMoreIcon } from "@icons/do/OpenMoreIcon.svg";
import { ReactComponent as TimeIcon } from "@icons/recipe/TimeIcon.svg";

export default function MiniRecipeElement({ id, showInfo }) {
  const recipe = recipes[id];

  const navigate = useNavigate();

  return (
    <div className="recipe-block" onClick={() => navigate(`/recipe/${id}`)}>
      <Corner />
      <Corner />
      <div className="link-to-recipe">
        <button>
          <OpenMoreIcon />
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
