import React from "react"
import ReactDOM from "react-dom/client"
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";

import "./index.css";

// "root route" (other routes render inside it)
const router = createBrowserRouter([
   {
      title: "root",
      path: "/",
      element: <Root />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
