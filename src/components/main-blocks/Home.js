import MiniRecipe from "../generic/MiniRecipe";
import { useNavigate } from "react-router-dom";
import { userData } from "../../_helpers/data/user";

import "./../../styles/main-blocks/Home.css";

import { ReactComponent as Corner } from "./../../assets/Corner.svg";
import { ReactComponent as ArrowRightUp } from "./../../assets/actions/ArrowRightUp.svg";
import { ReactComponent as DoubleTopArrow } from "./../../assets/home-page/DoubleTopArrow.svg";

export default function Home() {
  const navigate = useNavigate();

  const lastRecipiesIds = userData.history.slice(0, 1);

  return (
    <div className="main-container home-container">
      <div className="fly-block">
        <Corner />
        <Corner />
        <Corner />
        <Corner />
        <span className="rounded-span">Accessible</span>
        <p>Take control </p>
        <p>Of your nutrition</p>
        <p>By one click</p>
      </div>
      <div className="home-content-container">
        <div>
          <span className="rounded-span">Quickly</span>
          <span className="rounded-span">Flexible</span>
        </div>
        <h2>
          Fast
          <br />
          Diner
          <br />
          From AI
        </h2>
        <button
          className="button-generation"
          onClick={() => navigate("/generation")}
        >
          Go to generation <ArrowRightUp />
        </button>
        <div className="bottom-line">
          {lastRecipiesIds.map((id) => (
            <MiniRecipe id={id} key={id} />
          ))}
          <div className="history-link" onClick={() => navigate("/account")}>
            History <DoubleTopArrow />
          </div>
          <div className="blog-link" onClick={() => navigate("/")}>
            Blog <DoubleTopArrow />
          </div>
        </div>
      </div>
      <div className="home-picture-container">
        <img
          alt=""
          src="https://qph.cf2.quoracdn.net/main-qimg-c058b36cd1b52cb2d9fef42a7d9045eb-lq"
        />
        <div className="date-block">12.32.21</div>
      </div>
    </div>
  );
}
