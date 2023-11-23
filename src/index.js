import App from "./components/App";
import Error from "./components/Error";
import Home from "./components/main-blocks/Home";
import Login from "./components/auth-blocks/Login";
import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom/client";
import SignUp from "./components/auth-blocks/SignUp";
import store from "./store/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styles/GlobalParams.css";
import "./styles/themes/DefaultTheme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },

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
