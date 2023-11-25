import Account from "./main-blocks/Account";
import FullRecipe from "./generic/FullRecipe";
import Generation from "./main-blocks/Generation";
import Header from "./nav-bar/Header";
import Home from "./main-blocks/Home";
import Storage from "./main-blocks/Storage";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export default function Main() {
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
      return <FullRecipe />;
    }

    return <></>;
  }, [location]);
  return (
    <>
      <Header />
      <main>{mainComponentsView}</main>
    </>
  );
}
