import MiniRecipe from "../generic/MiniRecipe.js";
import { userData } from "../../_helpers/data/user.js";

import "./../../styles/main-blocks/Account.css";

export default function Account() {
  return (
    <>
      <div className="account-container box-shadow">
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
        <p>Date of birth: {userData.date_of_birth}</p>
        <p>Gender: {userData.gender}</p>
        <p>Country: {userData.country}</p>
      </div>
      <h3>The last 10 cooked dishes</h3>
      <div className="line-history-container">
        {userData.history.map((id) => (
          <MiniRecipe id={id} type={"line"} key={id} />
        ))}
      </div>
    </>
  );
}
