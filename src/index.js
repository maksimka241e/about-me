import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { PortfolioReducer } from "./hooks/DateSlise";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

const stores = configureStore(PortfolioReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={stores}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
