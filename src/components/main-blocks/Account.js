import MiniRecipe from "../generic/MiniRecipe.js";
import { userData } from "../../_helpers/data/user.js";
import { useNavigate } from "react-router-dom";

import "./../../styles/main-blocks/Account.css";

import { ReactComponent as UserIcon } from "./../../assets/UserIcon.svg";
import { ReactComponent as MaleIcon } from "./../../assets/genders/MaleIcon.svg";
import { ReactComponent as FemaleIcon } from "./../../assets/genders/FemaleIcon.svg";
import { ReactComponent as BuildingIcon } from "./../../assets/home-page/BuildingIcon.svg";

export default function Account() {
  const navigate = useNavigate();

  return (
    <div className="main-container account-container">
      <div className="account-history-container">
        <p className="account-history-title">Recent dishes cooked</p>
        <div className="history-block">
          {userData.history.slice(0, 8).map((id) =>
            id ? (
              <MiniRecipe id={id} key={id} showInfo={true} />
            ) : (
              <div
                className="recipe-empty"
                onClick={() => navigate("/generation")}
              >
                +
              </div>
            )
          )}
        </div>
      </div>
      <div className="account-info-container">
        <div className="account-info">
          <div className="account-photo">
            <UserIcon />
          </div>
          <p className="account-name">{userData.name}</p>
          <p className="account-email">{userData.email}</p>
          <p className="account-date-gender">
            {userData.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
            <span>|</span>
            {userData.date_of_birth} y.o.
          </p>
          <p className="account-country">
            <BuildingIcon /> {userData.country}
          </p>
        </div>
        <div className="account-stats">
          <div>
            Number of dishes cooked: <span>12</span>
          </div>
          <div>
            Average cooking time: <span>23m</span>
          </div>
          <div>
            Total cooking time: <span>127m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
