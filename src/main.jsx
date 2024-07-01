import React from "react"
import ReactDOM from "react-dom/client"
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";

import Root, {
   loader as rootLoader,
   action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

import "./index.css";

// "root route" (other routes render inside it)
const router = createBrowserRouter([
   {
      title: "root",
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
         {
            path: "contacts/:contactId",
            element: <Contact />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
