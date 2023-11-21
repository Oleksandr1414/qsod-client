import MiniRecipe from "../generic/MiniRecipe";
import { useNavigate } from "react-router-dom";
import { userData } from "../../_helpers/data/user";

import "./../../styles/main-blocks/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const lastRecipiesIds = userData.history.slice(0, 3);

  return (
    <div className="main-container home-container">
      <section className="link-to-generate  box-shadow">
        <button onClick={() => navigate("/generation")}>
          Go to generation
        </button>
      </section>
      <h3>Cooking history</h3>
      <section className="history-container">
        {lastRecipiesIds.map((id) => (
          <MiniRecipe id={id} type={"block"} key={id} />
        ))}
      </section>
    </div>
  );
}
