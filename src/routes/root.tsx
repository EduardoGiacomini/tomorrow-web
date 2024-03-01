import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../components";

export function Root(): React.ReactElement {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
