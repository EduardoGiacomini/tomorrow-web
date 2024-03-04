import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import { Root } from "./root";
import { PomodoroScreen } from "../modules/pomodoro";
import { FlashCardsScreen } from "../modules/flash-cards";
import { FlashCardsDetailsScreen } from "../modules/flash-cards/screens";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: ROUTES.HOME,
        element: <PomodoroScreen />,
      },
      {
        path: ROUTES.FLASH_CARDS,
        element: <FlashCardsScreen />,
      },
      {
        path: ROUTES.FLASH_CARDS_DETAIL,
        element: <FlashCardsDetailsScreen />,
      },
    ],
  },
]);

export function Router(): React.ReactElement {
  return <RouterProvider router={router} />;
}
