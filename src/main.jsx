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
import Contact, {
   loader as contactLoader,
} from "./routes/contact";
import EditContact, {
   action as editAction,
} from "./routes/edit";
import ErrorPage from "./error-page";

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
            loader: contactLoader,
         },
         {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
