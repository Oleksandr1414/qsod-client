import App from "./App";
import Auth from "@components/Authorization";
import Error from "@components/static/Error";
import MainContent from "@components/MainContent";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import store from "@store/store";
import { Flip, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "@styles/GlobalParams.css";
import "@styles/themes/DefaultTheme.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/authorization", element: <Auth /> },

  { path: "/home", element: <MainContent /> },
  { path: "/account", element: <MainContent /> },
  { path: "/storage", element: <MainContent /> },
  { path: "/generation", element: <MainContent /> },

  { path: "/recipe", element: <MainContent /> },
  { path: "/recipe/*", element: <MainContent /> },

  { path: "/loading", element: <div>Loading...</div> },
  { path: "/*", element: <Error /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <ToastContainer limit={3} transition={Flip} />
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
);
