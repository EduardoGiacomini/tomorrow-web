import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PomodoroScreen } from "../modules/pomodoro";
import { FlashCardsScreen } from "../modules/flash-cards";
import { Root } from "./root";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PomodoroScreen />,
      },
      {
        path: "flash-cards",
        element: <FlashCardsScreen />,
      },
    ],
  },
]);

export function Router(): React.ReactElement {
  return <RouterProvider router={router} />;
}
