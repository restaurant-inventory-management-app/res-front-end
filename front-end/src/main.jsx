import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import HistoryPage from './pages/HistoryPage/HistoryPage.jsx'
import MainStock from "./pages/MainStockPage/MainStock.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
import BranchPage from "./pages/BranchPage/BranchPage.jsx";
import ItemInBranchPage from "./pages/ItemInBranchPage/ItemInBranchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainStock />,
        index: true,
      },
      { path: "category/:categoryId", element: <CategoryPage /> },
      { path: "branch/:branchId", element: <BranchPage /> },
      {path: "branch/:branchId/category/:categoryId", element: <ItemInBranchPage />},
      { path: "history", element: <HistoryPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
