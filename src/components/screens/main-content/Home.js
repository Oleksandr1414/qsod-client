import CornerElement from "@components/elements/CornerElement";
import MiniRecipeElement from "@components/elements/MiniRecipeElement";
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "@data/user";

import "@styles/screens//main-content/Home.css";

import bgImageColor from "@images/bgImageColor.png";

import { ReactComponent as ArrowRightUp } from "@icons/system/ArrowRightUp.svg";
import { ReactComponent as DoubleTopArrow } from "@icons/system/ArrowTopDouble.svg";

export default function Home() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const lastRecipiesIds = userData.history.slice(0, 1);

  const currentTimeView = useMemo(() => {
    return format(currentTime, "HH:mm:ss");
  }, [currentTime]);

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }, []);

  return (
    <div className="main-container home-container">
      <div className="fly-block">
        <CornerElement />
        <CornerElement />
        <CornerElement />
        <CornerElement />
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
          Recipe For Diner
          <br />
          From AI <span className="home-title__span">Join now!</span>
        </h2>
        <button
          className="button-generation"
          onClick={() => navigate("/generation")}
        >
          Go to generation <ArrowRightUp />
        </button>
        <div className="bottom-line">
          {lastRecipiesIds.map((id) => (
            <MiniRecipeElement id={id} key={id} />
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
        <img alt="home__picture" src={bgImageColor} />
        <div className="date-block">
          <p>Current time</p>
          {currentTimeView}
        </div>
      </div>
    </div>
  );
}
