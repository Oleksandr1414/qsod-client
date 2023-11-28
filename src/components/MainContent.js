import Account from "./screens/main-content/Account";
import Generation from "./screens/main-content/Generation";
import Header from "./static/Header";
import Home from "./screens/main-content/Home";
import Recipe from "./screens/main-content/Recipe";
import Storage from "./screens/main-content/Storage";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function MainContent() {
  const location = useLocation();

  const mainComponentsView = useMemo(() => {
    const { pathname } = location;

    if (pathname === "/home") {
      return <Home />;
    }
    if (pathname === "/generation") {
      return <Generation />;
    }
    if (pathname === "/storage") {
      return <Storage />;
    }
    if (pathname === "/account") {
      return <Account />;
    }
    if (pathname.includes("/recipe")) {
      return <Recipe />;
    }

    return <></>;
  }, [location]);
  return (
    <>
      <Header />
      {mainComponentsView}
    </>
  );
}
