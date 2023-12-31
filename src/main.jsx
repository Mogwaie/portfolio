import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./routes/Route.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <NotFoundPage />,
  // },
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <App />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

