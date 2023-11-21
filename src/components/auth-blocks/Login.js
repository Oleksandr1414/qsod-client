import { useNavigate } from "react-router-dom";

import { ReactComponent as BackButton } from "./../../assets/BackButton.svg";
// import { ReactComponent as GoogleIcon } from "./../../assets/social_icons/GoogleIcon.svg";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container box-shadow">
      <div className="back-button">
        <BackButton />
      </div>
      <div className="media-container"></div>
      <form action="#">
        <h2>Login to Your Account</h2>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" />
        </div>
        <button className="default-button" onClick={() => navigate("/home")}>
          Log in
        </button>
        <div className="link-to">
          New to App?&nbsp;
          <a href="#">Create an account</a>
        </div>
        {/* <span>or</span>
        <hr />
        <div className="social-container">
          <GoogleIcon /> login with Google
        </div> */}
      </form>
    </div>
  );
}
