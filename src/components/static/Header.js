import { NavLink } from "react-router-dom";
import { userData } from "../../_helpers/data/user";

import "./../../styles/Header.css";

import logo from "./../../assets/images/logo.png";

import { ReactComponent as HomeIcon } from "./../../assets/home-page/HomeIcon.svg";
import { ReactComponent as UserIcon } from "./../../assets/home-page/UserIcon.svg";
import { ReactComponent as LogoutIcon } from "./../../assets/home-page/LogoutIcon.svg";

export default function Header() {
  const sendLogout = (event) => {
    event.preventDefault();
  };

  return (
    <header>
      <div className="header-container">
        <div>
          <NavLink className="nav-link" to="/">
            <img className="nav-logo" src={logo} alt="QSODLOGO" />
          </NavLink>
          <NavLink className="nav-link nav-link-home" to="/home">
            <HomeIcon />
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="nav-link" to="/generation">
            Generation
          </NavLink>
          <NavLink className="nav-link" to="/storage">
            Storage
          </NavLink>
          <NavLink className="nav-link" to="/">
            About Us
          </NavLink>
        </div>
        <div>
          <NavLink className="nav-link nav-link-logout" to="/account">
            <UserIcon />
            {userData.name}
            <LogoutIcon onClick={sendLogout} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
