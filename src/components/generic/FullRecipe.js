import { useMemo } from "react";
import { recipes } from "../../_helpers/data/recipes";
import { useLocation } from "react-router-dom";

import "./../../styles/generic/FullRecipe.css";

export default function FullRecipe() {
  const { pathname } = useLocation();

  const recipeInfo = useMemo(() => {
    if (!pathname) {
      return {};
    }

    return recipes[pathname.split("/")[2]];
  }, [pathname]);

  return (
    <div className="main-container recipe-container">{recipeInfo.name}</div>
  );
}
