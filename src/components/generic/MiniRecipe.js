import { useNavigate } from "react-router-dom";
import { recipes } from "../../_helpers/data/recipes";

import { ReactComponent as LikeIcon } from "./../../assets/LikeIcon.svg";
import { ReactComponent as TimeIcon } from "./../../assets/TimeIcon.svg";

import "./../../styles/generic/LineRecipe.css";
import "./../../styles/generic/MiniRecipe.css";

export default function MiniRecipe({ id, type }) {
  const recipe = recipes[id];

  const navigate = useNavigate();

  return (
    <div
      className={
        type === "line" ? "recipe-line box-shadow" : "recipe-block box-shadow"
      }
      onClick={() => navigate(`/recipe/${id}`)}
    >
      <div className="recipe-image">
        <img src={recipe.image_url} alt="" />
        <span className="recipe-likes">
          55 <LikeIcon />
        </span>
        <span className="recipe-time">
          20m <TimeIcon />
        </span>
      </div>
      <div className="recipe-info">
        <p className="recipe-name">{recipe.name}</p>
        <p className="recipe-description">{recipe.description}</p>
      </div>
    </div>
  );
}
