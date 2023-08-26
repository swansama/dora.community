import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./routes/Root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { JoinPage } from "./components/JoinPage.tsx";
import { CommunityGuidelinesPage } from "./components/CommunityGuidelines.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "communityguidelines",
        element: <CommunityGuidelinesPage />,
      },
      { 
        path: "join",
        element: <JoinPage />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
