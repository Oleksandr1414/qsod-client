import { useNavigate } from "react-router-dom";

import { ReactComponent as BackButton } from "./../../assets/BackButton.svg";
import { ReactComponent as MaleIcon } from "./../../assets/genders/MaleIcon.svg";
import { ReactComponent as FemaleIcon } from "./../../assets/genders/FemaleIcon.svg";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="auth-container box-shadow">
      <div className="back-button">
        <BackButton />
      </div>
      <div className="media-container"></div>
      <form action="#">
        <h2>Create account</h2>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" />
        </div>
        <div className="input-container">
          <span>Gender</span>
          <div>
            <label htmlFor="gender">
              <MaleIcon /> Male
            </label>
            <input name="gender" id="male" type="radio" value="male" checked />
          </div>
          <div>
            <label htmlFor="gender">
              <FemaleIcon /> Female
            </label>
            <input name="gender" id="female" type="radio" value="female" />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="date">Date of birth</label>
          <input id="date" type="number" min={16} max={120} />
        </div>
        <div className="input-container">
          <label htmlFor="country">Country</label>
          <input id="country" type="text" />
        </div>
        <button className="default-button" onClick={() => navigate("/storage")}>
          Create account
        </button>
        <div className="link-to">
          Already have an account?&nbsp;
          <a href="#">Login</a>
        </div>
      </form>
    </div>
  );
}
