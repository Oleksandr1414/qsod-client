import { NavLink, useNavigate } from "react-router-dom";
import { userData } from "@data/user";

import "@styles/static/Header.css";

import logo from "@images/logo.png";

import { ReactComponent as HomeIcon } from "@icons/HomeIcon.svg";
import { ReactComponent as UserIcon } from "@icons/users/UserIcon.svg";
import { ReactComponent as LogOutIcon } from "@icons/do/LogOutIcon.svg";

export default function Header() {
  const navigate = useNavigate();

  const sendLogout = (event) => {
    event.preventDefault();

    localStorage.removeItem("currentUser");
    navigate("/authorization");
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
            <LogOutIcon onClick={sendLogout} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}
