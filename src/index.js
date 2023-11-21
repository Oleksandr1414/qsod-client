import App from "./components/App";
import Authorization from "./components/main-blocks/Authorization";
import Error from "./components/Error";
import Home from "./components/main-blocks/Home";
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styles/GlobalParams.css";
import "./styles/themes/DefaultTheme.css";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
  },
  { path: "/auth", element: <Authorization /> },

  { path: "/home", element: <Main /> },
  { path: "/account", element: <Main /> },
  { path: "/storage", element: <Main /> },
  { path: "/generation", element: <Main /> },

  { path: "/recipe", element: <Error /> },
  { path: "/recipe/*", element: <Main /> },

  { path: "/loading", element: <Home /> }, //Loading
  { path: "/*", element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
