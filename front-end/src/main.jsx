import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import MainStock from "./pages/MainStock/MainStock.jsx";
import Branches from "./pages/Branches/Branches.jsx";
import History from "./pages/History/History.jsx";

const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "main",
        element: <MainStock />,
      },
      { path: "branches", element: <Branches /> }, 
      {path: 'History', element: <History/>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
